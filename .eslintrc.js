module.exports = {
  root: true,
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", ".tsx"]
      }
    ],
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", "never"],
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react/jsx-props-no-spreading": 0
  },
  plugins: ["jest", "react", "react-native"],
  "env": {
    "node": true,
    "es6": true,
    "jest": true,
    "react-native/react-native": true
  },
};
