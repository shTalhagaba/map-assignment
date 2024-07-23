import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
  Button,
  RefreshControl,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import openMap from "react-native-open-maps";
import { MAP_API_KEY } from "../../common/Constants";
import Strings from "../../common/Strings";

const API_KEY = MAP_API_KEY;

const NearbyRestaurantsApp = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message:
              "This app needs access to your location to show nearby restaurants.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        console.log("Android permission result:", granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          Alert.alert(
            "Permission Denied",
            "Location permission is required to find nearby restaurants."
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      Geolocation.requestAuthorization("whenInUse")
        .then((response) => {
          console.log("iOS permission result:", response);
          if (response === "granted") {
            getCurrentLocation();
          } else {
            Alert.alert(
              "Permission Denied",
              "Location permission is required to find nearby restaurants."
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        Alert.alert("Error", error.message);
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    if (location) {
      fetchNearbyRestaurants();
    }
  }, [location]);

  const fetchNearbyRestaurants = async () => {
    try {
      setRefreshing(true);
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1500&type=restaurant&key=${API_KEY}`
      );
      const restaurantData = response.data.results
        .slice(0, 10)
        .map((restaurant) => {
          const distance = getDistanceFromLatLonInKm(
            location.latitude,
            location.longitude,
            restaurant.geometry.location.lat,
            restaurant.geometry.location.lng
          ).toFixed(2);
          return {
            name: restaurant.name,
            address: restaurant.vicinity,
            distance: `${distance} km`,
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
          };
        });
      setRestaurants(restaurantData);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const openMapApp = (latitude, longitude) => {
    openMap({ latitude, longitude, zoom: 18 });
  };

  const onRefresh = () => {
    getCurrentLocation();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        {Strings.nearbyRestaurants} {restaurants?.length}
      </Text>
      <Button title="Get Current Location" onPress={onRefresh} />
      <FlatList
        data={restaurants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.distance}>{item.distance}</Text>
            <Button
              title={Strings.viewOnMap}
              onPress={() => openMapApp(item.latitude, item.longitude)}
            />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
  },
  distance: {
    fontSize: 14,
    color: "gray",
  },
});

export default NearbyRestaurantsApp;
