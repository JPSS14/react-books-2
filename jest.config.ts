import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};

export default config;
