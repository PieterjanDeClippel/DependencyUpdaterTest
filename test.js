const assert = require('node:assert');
const _ = require('lodash');
const { addDays, formatISO } = require('date-fns');

assert.deepStrictEqual(_.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
assert.strictEqual(formatISO(addDays(new Date(2020, 0, 1), 1), { representation: 'date' }), '2020-01-02');
console.log('tests passed');
