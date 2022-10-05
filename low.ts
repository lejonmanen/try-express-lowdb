import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
// import down_lo from 'lowdb'
// import lowdb from 'lowdb'
// import FileSync from "lowdb/adapters/FileSync";
import { Low, JSONFile } from 'lowdb'


type Fruit = string

type Schema = {
	fruits: Fruit[];
}

// const adapter = new FileSync<Schema>('db.json')
// let db: lowdb.LowdbSync<Schema> = lowdb(adapter)

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')
const adapter = new JSONFile<Schema>(file)
const db = new Low(adapter)

db.read()
// let fruits = db.get('fruits').value()
// console.log('fruits', fruits);

// if( !fruits ) {
if( !db.data || !db.data.fruits ) {
	// db.defaults({ fruits: ['apple'] })
	db.data = { fruits: ['apple'] }
	db.write()
}
// console.log('db', db.data);

const fruits = db.data.fruits
// fruits.push('apple')
// let first = fruits[0]
// console.log('First fruit: ', first);

// const write = db.write
export { fruits, db }
