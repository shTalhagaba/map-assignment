Sure, here's a sample README file for your React Native project. This README will guide users on how to run the app locally, including instructions for replacing the MAP_API_KEY.

```markdown
# Nearby Restaurants App

This is a React Native application that displays a list of nearby restaurants using the Google Places API. The app shows the restaurant's name, address, and distance from the user's current location.

## Features

- Display a list of 10 nearby restaurants.
- Show restaurant details including name, address, and distance.

## Requirements

- npm or yarn
- React Native CLI
- Android Studio or Xcode (for running on an emulator or physical device)
- A Google Places API Key

## Getting Started

### 1. Clone the Repository

### 2. Install Dependencies

Using npm:
```sh
npm install
```

Using yarn:
```sh
yarn install
```

### 3. Configure the Google Places API Key

Replace `MAP_API_KEY` with your actual Google Places API Key in the appropriate file. Typically, you would have a configuration file or an environment variable for this.

### 4. Run the App

#### On Android
```sh
npx react-native run-android
```

#### On iOS
```sh
npx pod-install
npx react-native run-ios
```

#### On Web
If you have configured React Native for Web:
```sh
npm run web
```

### 5. Running Tests (if applicable)

```sh
npm test
```

## Folder Structure

```
nearby-restaurants-app/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   └── ...
├── .env
├── App.js
├── package.json
└── ...
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```

Make sure to customize the placeholders like `https://github.com/yourusername/nearby-restaurants-app.git` and `YOUR_MAP_API_KEY` with your actual GitHub repository URL and API key respectively.
