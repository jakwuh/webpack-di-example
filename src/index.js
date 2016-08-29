import './a'
import './b'
import './c'

let definitions = require('di-definitions');

console.info(`
=============
Automatically generated config:

${JSON.stringify(definitions, null, 2)};
=============
`);
