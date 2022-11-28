const infobancarac = (prefix, pushname) => {
return `
Olá ${pushname}

${prefix} NO LIMITE CARACTERES VOCÊ DEFINE UMA QUANTIDADE EXATA DE CARACTERES QUE POSSA SER ENVIADO NO GRUPO,SE PASSAR DO LIMITE O INDIVÍDUO SERÁ BANIDO IMEDIATAMENTE

${prefix}limitecaracteres 1 

1 é pra ativar, 0 pra desativar
`
}

exports.infobancarac = infobancarac