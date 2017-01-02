'use strict'
const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
    const spawned = spawn(cmd, args)
    return duplexer(spawned.stdin, spawned.stdout)
}
