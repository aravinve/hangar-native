module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          assets: "./src/assets",
          screens: "./src/screens",
          config: "./src/config",
          ApiClient: "./src/ApiClient.js",
        },
      },
    ],
  ],
};
