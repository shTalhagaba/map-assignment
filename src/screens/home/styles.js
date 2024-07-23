import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  checkInItem: {
    alignItems: 'center',
    marginBottom: 12,
  },
  coinContainer: {
    backgroundColor: '#2E3138',
    borderRadius: 14,
    padding: 11,
    marginBottom: 8,
    alignContent: 'center',
    alignItems: 'center',
  },
  bonusText: {
    color: '#878787',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  coinImage: {
    width: 18,
    height: 18,
    marginTop: 4,
  },
  dayText: {
    color: '#8D8D8D',
    fontSize: 10,
  },
  flatListContent: {
    justifyContent: 'space-between',
  },







  scrollContainer: {
    paddingBottom: 16,
  },
  header: {
    padding: 16,
    marginTop: 130,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backButton: {
    padding: 8,
    // backgroundColor: "#ccc", // light grey background
    borderRadius: 4,
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  temperatureContainer: {
    padding: 8,
    backgroundColor: "#000", // black background
    borderRadius: 4,
  },
  temperatureText: {
    color: "#fff",
    fontSize: 18,
  },
  listContainer: {
    backgroundColor: "#1E1E1E", // dark background
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    margin: 16,
  },


  bonusTextPink: {
    color: "#FF6BC5",
    fontSize: 16,
    marginBottom: 8,
    // fontWeight: '600',
  },
  dailyText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
  },
  yourText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "700",
  },
  earnText: {
    color: "#8D8D8D",
    fontSize: 16,
    marginBottom: 8,
  },



  taskItem: {
    backgroundColor: "#2E3138",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  taskIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  taskButton: {
    padding: 6,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  taskButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  button: {
    padding: 13,
    borderRadius: 30,
    marginBottom: 16,
    alignItems: "center",
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: '600',
  },
  flatListContent: {
    paddingBottom: 12,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    color: "#fff", // Adjust text color as per your design
  },
  descriptionBox: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
    borderRadius: 10,
    padding: 20,
  },
  descriptionText: {
    fontSize: 13,
    marginBottom: 6,
    color: "#fff", // Adjust text color as per your design
  },
});

export default styles;
