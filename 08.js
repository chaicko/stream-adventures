'use strict'
const through = require('through2')
const http = require('http')

let server = http.createServer(function (req, res) {
    req
        .pipe(through(function (body, _, next) {
            if (req.method === 'POST') this.push(body.toString().toUpperCase())
            next()
        }))
        .pipe(res)
    //res.end()
})

server.listen(process.argv[2])

