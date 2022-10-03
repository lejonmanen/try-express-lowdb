import express from 'express'
const app = express()
const port = 1337

import { fruits, db } from './low.js'

app.get('/', (req, res) => {
	res.send('Hello from server')
})

app.get('/fruits', (req, res) => {
	res.send(fruits)
})

app.get('/add', (req, res) => {
	fruits.push('baNaNa')
	db.write()
	res.sendStatus(200)
})

app.listen(port, () => {
	console.log('Server listening on ' + port);
})
