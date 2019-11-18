import ts from "@wessberg/rollup-plugin-ts";
import resolve from "rollup-plugin-node-resolve";
import packageJson from "./package.json";

export default {
  input: "src/repro.ts",
  output: [
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true,
    },
  ],
  plugins: [ts(), resolve()],
};
