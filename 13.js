/*
 * In this example, you will be given a readable through, `counter`, as the first
 * argument to your exported function:
 *
 *  module.exports = function (counter) {
 *      // return a duplex through to count countries on the writable side
 *      // and pass through `counter` on the readable side
 *  };
 *
 *  Return a duplex through with the `counter` as the readable side. You will be
 *  written objects with a 2-character `country` field as input, such as these:
 *
 *      {"short":"OH","name":"Ohio","country":"US"}
 *      {"name":"West Lothian","country":"GB","region":"Scotland"}
 *      {"short":"NSW","name":"New South Wales","country":"AU"}
 *
 *  Create an object to track the number of occurrences of each unique country code.
 *
 *  For example:
 *
 *      {"US": 2, "GB": 3, "CN": 1}
 *
 *  Once the input ends, call `counter.setCounts()` with your counts object.
 *
 *  The `duplexer2` module will again be very handy in this example.
 *
 *  If you use duplexer, make sure to `npm install duplexer2` in the directory where
 *  your solution file is located.
 *
*/

'use strict'
const through = require('through2')
const duplexer = require('duplexer2')

module.exports = function (counter) {
    let counts = {} // Object to count countries
    let writable = through.obj(
        function transform (data, enc, cb) {
            counts[data.country] = (counts[data.country] || 0) + 1
            cb()
        },
        function flush (done) {
            counter.setCounts(counts)
            done()
        }
    ) // The writable through

    // Return the duplexer that joins the readable and writable throughs
    return duplexer({objectMode: true}, writable, counter)
}
