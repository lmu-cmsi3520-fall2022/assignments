import { insertMovie } from './netflix-dal.mjs'

if (process.argv.length !== 4) {
  console.log('Usage: add-movie <title> <year>')
  process.exit(1)
}

const title = process.argv[2]
const year = process.argv[3]
try {
  const movieNode = await insertMovie(title, year)
  const { properties: movie } = movieNode
  console.log(`Movie “${movie.title}” (${movie.year}) added with ID ${movieNode.identity}.`)
} catch (error) {
  console.error(`Sorry, something went wrong. Please ensure that “${year}” is a valid year.`)
}

// Explicitly exit sync since we are asynchronous at this point.
process.exit(0)
