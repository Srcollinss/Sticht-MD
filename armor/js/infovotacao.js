const infovotacao = (prefix, pushname) => {
return`

Olá ${pushname}

Comando: ${prefix}votação

Exemplo: ${prefix}votação @marca-pessoa/Vamos lanchar bolo hoje??/1  

para votar ou negar, tem que digitar sem prefixo:

voto ou devoto


1 que coloquei é 1 Minuto de votação, então faça exatamente, dessa fórma aí.

e também contêm o comando:

${prefix}delvote

ele anula sua votação

`
}

exports.infovotacao = infovotacao