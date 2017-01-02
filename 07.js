'use strict'
const concat = require('concat-stream')
let rev = concat(function (content) {
    let reversed = content.toString().split('').reverse().join('')
    process.stdout.write(reversed)
})


process.stdin.pipe(rev)
