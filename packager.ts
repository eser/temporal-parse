import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import packageJson from "./package.json" assert { type: "json" };
import denoJson from "./deno.json" assert { type: "json" };

await emptyDir("./dist");

await build({
  // packageManager: "yarn",
  entryPoints: [
    "./src/mod.ts",
    {
      name: "./polyfill",
      path: "./src/polyfill.ts",
    },
  ],
  outDir: "./dist",
  package: packageJson,
  importMap: denoJson.importMap,
  shims: {
    // see JS docs for overview and more options
    deno: false,
    // replaces node.js timers with browser-API compatible ones
    timers: false,
    // the global confirm, alert, and prompt functions
    prompts: false,
    // shims the Blob global with the one from the "buffer" module
    blob: false,
    // shims the crypto global.
    crypto: false,
    // shims DOMException
    domException: false,
    // shims fetch, File, FormData, Headers, Request, and Response
    undici: false,
    // shams (checker) for the global.WeakRef, helps type-checking only
    weakRef: false,
    // shims WebSocket
    webSocket: false,
  },
  mappings: {
    "https://cdn.skypack.dev/@js-temporal/polyfill": {
      name: "@js-temporal/polyfill",
      version: "0.4.2",
      peerDependency: false,
    },
  },
  typeCheck: true,
  test: false,
  declaration: true,
  compilerOptions: {
    // importHelpers: tsconfigJson?.compilerOptions?.importHelpers,
    importHelpers: false,
    // target: tsconfigJson?.compilerOptions?.target,
    target: "ES2017",
    // sourceMap: tscconfigJson?.compilerOptions?.sourceMap,
    // inlineSources: tscconfigJson?.compilerOptions?.inlineSources,
    // lib: denoJson?.compilerOptions?.lib as LibName[] | undefined,
    lib: ["esnext", "dom", "dom.iterable"], // , "dom.asynciterable"
    // skipLibCheck: tsconfigJson?.compilerOptions?.skipLibCheck,
  },
  scriptModule: "cjs",
});

// post build steps
Deno.copyFileSync("LICENSE", "dist/LICENSE");
Deno.copyFileSync("README.md", "dist/README.md");
Deno.copyFileSync("CODE_OF_CONDUCT.md", "dist/CODE_OF_CONDUCT.md");
Deno.copyFileSync("CONTRIBUTING.md", "dist/CONTRIBUTING.md");
Deno.copyFileSync("SECURITY.md", "dist/SECURITY.md");
