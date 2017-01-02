'use strict'
/*
 * Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
 * it. Pipe the response stream to process.stdout.
 */

const http = require('http')
let req = http.request({ port: 8099, method: 'POST' }, res => res.pipe(process.stdout))
process.stdin.pipe(req)
