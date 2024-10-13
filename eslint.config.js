import eslintPluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";  // Import Babel parser


export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,  // Use babel parser for modern JS and JSX
      parserOptions: {
        requireConfigFile: false,  // Allow Babel parser without a config file
        babelOptions: {
          presets: ["@babel/preset-react"]  // Add support for React/JSX
        }
      }
    },
    plugins: {
      react: eslintPluginReact
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn"
    },
    settings: {
      react: {
        version: "detect"  // Automatically detect the React version
      }
    }
  }
];
