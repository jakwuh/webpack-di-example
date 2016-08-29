# webpack-di-example

Example of using [extract-di-webpack-plugin](https://github.com/jakwuh/extract-di-webpack-plugin) and [babel-plugin-extract-dependency-definitions](https://github.com/jakwuh/babel-plugin-extract-dependency-definitions) to statically generate Dependency Injection definitions

### Usage:

```bash
npm i
npm start
```

Output:
```bash
Hash: dc61684f2ba578cc04a5
Version: webpack 1.13.2
Time: 612ms
  Asset     Size  Chunks             Chunk Names
main.js  4.16 kB       0  [emitted]  main
   [0] ./src/index.js 243 bytes {0} [built]
   [1] ./src/a.js 589 bytes {0} [built]
       cjs require ./a [0] ./src/index.js 3:0-14
   [2] ./src/b.js 1.27 kB {0} [built]
       cjs require ./b [0] ./src/index.js 5:0-14
   [3] ./src/c.js 305 bytes {0} [built]
       cjs require ./c [0] ./src/index.js 7:0-14
   [4] ./~/extract-di-webpack-plugin/noop.js 47 bytes {0} [built]
       cjs require di-definitions [0] ./src/index.js 9:18-43

=============
Automatically generated config:

{
  "A": {
    "C": "C"
  },
  "B": {
    "A": "A"
  }
};
=============

```
