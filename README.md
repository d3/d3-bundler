# d3-bundler

A [Rollup](https://github.com/rollup/rollup)-based bundler for D3 modules.

To install:

```
npm install -g d3-bundler
```

To use, define an ES6 module that imports the D3 code you need and defines the
corresponding `d3` object. For example:

```js
import {
  event,
  select,
  selectAll
} from "d3-selection";

export default {
  get event() { return event; },
  select: select,
  selectAll: selectAll
};
```

Make sure you have the desired D3 modules installed:

```
npm install d3-selection
```

Build your bundle:

```
d3-bundler -o d3.js -- index.js
```

Or, minified:

```
npm install -g uglify-js
d3-bundler -o d3.js -- index.js && uglifyjs -c -m -o d3.min.js -- d3.js
```

Have a nice day!

```html
<!DOCTYPE html>
<meta charset="utf-8">
<body>
<script src="d3.js"></script>
<script>

d3.select("body").append("h1").text("Hello, world!");

</script>
```

## Command Line Reference

```
d3-bundler [options] -- [file]
```

The input *file* should be an ES6 module that defines a default export object. See [the examples](https://github.com/d3/d3-bundler/tree/master/example).

Options:

* <i>--external, -x</i> [default: false]

If true, keep external dependencies external. This is useful if you want to generate a CommonJS build, say, and use a different bundler for generating you bundle.

* <i>--output, -o</i> [default: "bundle.js"]

Specify the name of the generated bundle file.

* <i>--format, -f</i> [default: "umd"]

Specify the output format of the generated JavaScript. See [Rollup](https://github.com/rollup/rollup#api) for supported values.

* <i>--name, -n</i> [default: "d3"]

Specify the name of the output module. This determines the name of the exported global in certain output formats.
