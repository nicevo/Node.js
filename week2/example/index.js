const fs = require('fs')

const name = process.argv[2]

function hello(name = 'you') {

  console.log(`Hello, ${name}`)
}
let randomWord = 'test'

hello(name)
const randomNumber = Math.floor(Math.random() * 200) + 1
console.log(randomNumber)


fs.readFile('words.txt', 'utf8', function (err, data) {
  if (err) throw error;
  console.log('It worked!')
  // console.log(data)
  const wordsArray = data.split('\n')
  // console.log(wordsArray)
  // const firstFiveWords = wordsArray.splice(0, 5)
  randomWord = wordsArray[randomNumber - 1]
  console.log(randomWord)

  fs.writeFile('randomWord.txt', randomWord, function (err) {
    if (err) throw error;
    console.log('Success!')
  })
}) 