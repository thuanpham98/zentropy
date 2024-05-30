import type { Config } from "jest";
import { defaults } from "jest-config";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    bail: 1, //retrive affter n  failures
    moduleFileExtensions: [
      ...defaults.moduleFileExtensions,
      "js",
      "mjs",
      "cjs",
      "jsx",
      "ts",
      "tsx",
      "json",
      "node",
    ],
  };
};
