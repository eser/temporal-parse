import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { minify } from "rollup-plugin-esbuild";
import multiInput from "rollup-plugin-multi-input";
import sourcemaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const globalPlugins = [
  commonjs(),
  nodeResolve(),
  multiInput({
    relative: "dist/",
  }),
  sourcemaps(),
  minify(),
];

function template(formats, configFn) {
  return formats.reduce(
    (acc, curr) => {
      return [...acc, ...configFn(curr)];
    },
    [],
  );
}

const bundles = [
  { format: "cjs", entry: "index" },
  { format: "esm", entry: "mod" },
];

const config = template(bundles, (bundle) => [
  {
    input: [
      {
        [bundle.entry]: "dist/mod.js",
      },
    ],
    // preserveModules: true,
    plugins: [
      ...globalPlugins,
      // esbuild(),
    ],
    external: externals,
    output: [
      {
        dir: `dist/`,
        format: bundle.format,
        sourcemap: true,
        chunkFileNames: "[name].js",
        exports: "named",
      },
    ],
  },
]);

export default config;
