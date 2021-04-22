const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200);
 res.end('O servidor foi ativado!');
});
server.listen(3000);

const dbd = require("dbd.js")
const mySecret = process.env['Token']
 
const bot = new dbd.Bot({
 sharding: false, //true or false 
 shardAmount: 2, //Shard amount 
 mobile: false, //true or false - Celular status
 dbhToken: "danbot-jqfsyj", //Remove // if using, get an API Key from their Server
 token: mySecret, //Discord Bot token
 prefix: ["$getServerVar[prefixo]","$getServerVar[prefix]"], //Prefixo do bot
})
 
bot.onMessage() //Iniciar o bot/comandos




bot.loadCommands(`./commands/`) //Carregar os comandos exportados.



bot.status({
 text: "Desenvolvimento",
 type: "PLAYING",
 time: 12
})

bot.variables({
  prefixo: "/f",
  prefix: "/f",
}) //Variáveis do bot