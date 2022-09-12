# 🕑 [temporal-parse](https://github.com/eserozvataf/temporal-parse)

[![npm version][npm-image]][npm-url]
[![npm download][npm-download-image]][npm-url]
[![license][license-image]][license-url]


## What is the temporal-parse?

`Temporal` is the next generation of JavaScript's standard Date API. It's currently proposed to TC39 (see: https://github.com/tc39/proposal-temporal) and in Stage 3.

However Temporal brings many features, there'll be no "human-readable string format parsing". (see: https://tc39.es/proposal-temporal/docs/strings.html)

This project aims to parse human-readable strings for Temporal, and generate proper inputs for Temporal's `Temporal.xxxx.from()` functions.


## Sample Usage

```js
import { Temporal } from "npm:@js-temporal/polyfill";
import { parseDate } from "npm:temporal-parse";

const parsedDate = parseDate("07/12/1995", "en-GB"); // { year: 1995, month: 12, day: 7 }
const dateTime = Temporal.PlainDateTime.from(parsedDate);

console.log(dateTime.toString()); // => 1995-12-07T00:00:00
```


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra
modules are welcome.

- To contribute to code: Fork the repo, push your changes to your fork, and
  submit a pull request.
- To report a bug: If something does not work, please report it using
  [GitHub Issues](https://github.com/eserozvataf/temporal-parse/issues).


## To Support

[Visit my GitHub Sponsors profile at github.com/sponsors/eserozvataf](https://github.com/sponsors/eserozvataf)

[npm-image]: https://img.shields.io/npm/v/temporal-parse.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dt/temporal-parse.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/temporal-parse
[license-image]: https://img.shields.io/npm/l/temporal-parse.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/temporal-parse/blob/master/LICENSE
