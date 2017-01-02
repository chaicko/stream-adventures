'use strict'
/*
 * Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
 * it. Pipe the response stream to process.stdout.
 */

const request= require('request')
let req = request.post('http://localhost:8099')

process.stdin.pipe(req).pipe(process.stdout)
