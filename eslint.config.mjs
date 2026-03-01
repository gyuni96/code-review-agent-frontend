import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Add Prettier recommended configuration (which includes the plugin and rule)
  eslintPluginPrettier,
  // Disable ESLint rules that might conflict with Prettier
  eslintConfigPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
