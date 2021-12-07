const fs = require('fs').promises;
const arguments = process.argv.slice(2);


// console.log(arguments)


async function readFile(file){
    const data = await fs.readFile(file);
    console.log(data.toString())
}
console.log(readFile('./text.txt'))





//scrivere su file
async function writeFile(file, content){
    await fs.writeFile(file,content)
}
const text =
`
${arguments[0]}, ${arguments[1]}
${arguments[2]}, ${arguments[3]}
`



writeFile('text.txt', text)
