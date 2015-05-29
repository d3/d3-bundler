An [Rollup](https://github.com/rollup/rollup)-based bundler for D3 modules.

To install:

```
npm install --save-dev d3-bundler
```

To use, define an ES6 module that imports the D3 code you need:

```js
import {select, selectAll} from "d3-selection";
import {ease} from "d3-transition";
export {select, selectAll, ease};
```

Make sure you have these D3 modules installed:

```
npm install --save d3-selection d3-transition
```

Then build your bundle!

```
node_modules/.bin/d3-bundler -- d3.js > d3-bundle.js
```

Or, if you clone this repo, you can try:

```
bin/d3-bundler --polyfill-map -- example/one.js
```
