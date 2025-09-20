import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  globalIgnores([
    "**/*.md",
    "**/*.js",
    "**/*.json",
    "**/node_modules/**",
    "**/dist/**",
    "**/test/**",
  ]),

  prettierConfig,
  tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    plugins: { js, import: importPlugin, prettier: prettierPlugin },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },

      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "no-unused-vars": "off",

      "@typescript-eslint/no-explicit-any": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@app/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@domain/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@rest/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          warnOnUnassignedImports: true,
        },
      ],

      "@typescript-eslint/no-unused-vars": ["error"],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
  },
]);
