import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()
if( !db.data || !db.data.fruits ) {
	db.data = { fruits: ['apple'] }
	await db.write()
}
console.log('db', db.data);

const fruits = db.data.fruits
// fruits.push('apple')
// let first = fruits[0]
// console.log('First fruit: ', first);

// const write = db.write
export { fruits, db }
