'use strict'
const split = require('split')
const through2 = require('through2')

let cnt = 1

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        function transform (lineBuf) {
            let lineStr = (cnt % 2)?
                lineBuf.toString().toLowerCase():
                lineBuf.toString().toUpperCase()

            cnt++
            return lineStr + '\n'
        }
        this.push(transform(line))
        next()
    }))
    .pipe(process.stdout)

