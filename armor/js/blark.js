const fs = require("fs")
const chalk = require('chalk');

async function startAle2() {
let Aleat = require.resolve(__filename)
fs.watchFile(Aleat, () => {
fs.unwatchFile(Aleat)
console.log(chalk.redBright(`Atualizando... ${__filename}`))
delete require.cache[Aleat]
require(Aleat)
})


}

exports.startAle2 = startAle2