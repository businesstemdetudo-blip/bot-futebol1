const venom = require('venom-bot');

let lista = [];

venom.create({
  session: 'futebol-bot'
}).then((client) => start(client));

function start(client) {
  console.log('BOT RODANDO ⚽');

  client.onMessage(async (message) => {
    const texto = message.body.toLowerCase();
    const nome = message.sender.pushname || "Jogador";

    if (texto === 'vou') {
      if (!lista.includes(nome)) {
        lista.push(nome);

        await client.sendText(message.from,
          `⚽ ${nome} confirmado!\n\nLista:\n${lista.join('\n')}`
        );
      }
    }

    if (texto === 'lista') {
      await client.sendText(message.from,
        `📋 Lista atual:\n\n${lista.join('\n')}`
      );
    }
  });
}