import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import packageJson from "./package.json" assert { type: "json" };

await emptyDir("./dist");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./dist",
  package: packageJson,
  shims: {
    // see JS docs for overview and more options
    deno: false,
  },
  typeCheck: false,
  test: false,
  declaration: true,
  scriptModule: false,
});

// post build steps
Deno.copyFileSync("LICENSE", "dist/LICENSE");
Deno.copyFileSync("README.md", "dist/README.md");
