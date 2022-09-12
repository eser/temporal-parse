import { type DateFormat } from "./types.ts";
// import { Temporal as TemporalPolyfill } from "npm:@js-temporal/polyfill";

const toTemporal = function toTemporal(input: DateFormat) {
  // const temporal = ("Temporal" in globalThis)
  //   ? globalThis.Temporal
  //   : TemporalPolyfill;

  // deno-lint-ignore no-explicit-any
  const temporal: any = ("Temporal" in globalThis);

  return temporal.PlainDate.from(input);
};

export { toTemporal };
