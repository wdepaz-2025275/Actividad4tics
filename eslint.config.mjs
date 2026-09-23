export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        fetch: "readonly",
        console: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "error"
    }
  }
];