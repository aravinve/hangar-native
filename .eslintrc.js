module.exports = {
  root: true,
  plugins: ["unused-imports", "autofix", "sort-imports-es6-autofix"],
  extends: "@react-native-community",
  overrides: [
    {
      files: ["./**/*.js"],
    },
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/ban-ts-ignore": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "autofix/no-debugger": "error",
  },
};
