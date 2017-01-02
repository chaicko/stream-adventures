'use strict'
const ws = require('websocket-stream')
let stream = ws('ws://localhost:8099')
stream.write('hello\n')
