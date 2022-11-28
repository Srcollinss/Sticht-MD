const infosorteio = (prefix, pushname) => {
return`
Olá ${pushname}

Existe 2 tipos de comando de sorteio. 

[1]- ${prefix}sorteio

[2]- ${prefix}sorteionumero

O comando ${prefix}sorteio ele sorteia um número aleatorio de alguém do grupo e fala que ele foi o sortudo. 

Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$

O comando ${prefix}sorteionumero ele envia números aleatorios de 1 a 257

Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$

`
} 

exports.infosorteio = infosorteio