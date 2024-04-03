const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World Here are the update version'))

app.listen(3000, () => console.log('server start'))