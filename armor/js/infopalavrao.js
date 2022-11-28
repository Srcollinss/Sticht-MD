const infopalavrao = (prefix, pushname) => {
return `
Olá ${pushname}

o antipalavrão é criado por você mesmo(a), existe os seguintes comandos:

${prefix}addpalavra

${prefix}delpalavra

${prefix}antipalavrão

pexemplo: 

${prefix}addpalavra lixo

isso será incluído como um palavrão

você deve ativar a função por grupo, exemplo:

${prefix}antipalavrão 1  

1 é pra ativar, 0 pra desativar. 

e se você quer tirar a palavra de inclusão dos palavrões, é só digitar :

${prefix}delpalavra lixo

"lixo" é apenas a palavra que utilize como exemplo, mas você que tem que criar, e escolher quais frases não deseja que seja falada no seu grupo.
`
}

exports.infopalavrao = infopalavrao