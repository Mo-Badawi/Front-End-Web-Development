import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        env: {
            browser: true,
            es2021: true,
            mocha: true,
        },

        rules: {
            "no-var": "error",
            "no-unused-vars": "error",
            semi: ["error", "always"],
            "no-console": "warn",
            curly: "error",
        },
    },
]);
