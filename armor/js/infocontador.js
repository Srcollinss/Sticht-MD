const infocontador = (prefix, pushname) => {
return`
Olá ${pushname}

contém alguns comandos

-
(1) ${prefix}rankativos

(Descrição: Ele mostra os tops 5 com mais mensagem enviada e cmd dados
 -      -      -       -       -       -
-               
(2) ${prefix}atividades

(Descrição:  Este comando, ele mostra as atividades de todos os membros do grupo
-    -   -    -    -    -    -   -    - 
-
(3) ${prefix}checkativo 

(Descrição: Esse comando, você deve marcar a pessoa, Exemplo: ${prefix}checkativo @marca-a-pessoa-do-gp, e assim como esse, é semelhante o aos outros
-   -   -   -   -   -   -   -   -   -   - 

(4) ${prefix}banghost

Preste muita atenção, este comando, você deve digitar ele, mais a quantidade de mensagem que é pra banir as pessoas que tiver abaixo daquela quantidade

Exemplo: ${prefix}banghost 0 

ele vai banir todos aqueles que tiver com 0 mensagem,mais cuidado antes verifique o contado de msg do bot
 `
}

exports.infocontador = infocontador