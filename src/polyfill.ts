import { Temporal } from "https://cdn.skypack.dev/@js-temporal/polyfill";

if (!("Temporal" in globalThis)) {
  // @ts-ignore: in case of warning
  globalThis.Temporal = Temporal;
}
