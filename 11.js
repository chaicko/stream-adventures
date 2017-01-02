'use strict'
const through = require('through2')
const trumpet = require('trumpet')

let tr = trumpet()
let stream = tr.createStream('.loud') // R/W stream with <loud> HTML contents
// Read <loud> HTML content, transform to Uppercase and write again
stream.pipe(through(function (data, _, next) {
    this.push(data.toString().toUpperCase())
    next()
})).pipe(stream)

// stdin is the input to tr, output of tr goues to stdout
process.stdin.pipe(tr).pipe(process.stdout)

