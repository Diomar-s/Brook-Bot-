//Código creador por WillZek colaborador De BrookBot 
//Audio puesto por WillZek 
//si usa el audio para su bot deje los créditos 
//No seas gey no quites los créditos 😑🇦🇱

import fs from 'fs';

let handler = async (m, { conn }) => {
  let text = m.text.toLowerCase(); 
  let user = global.db.data.users[m.sender];

  const audioMap = {
    'brook': './Brook/brook.mp3',

  };

  for (let key in audioMap) {
    if (text.includes(key)) {
      try {
        if (fs.existsSync(audioMap[key])) {
          await conn.sendFile(m.chat, audioMap[key], `${key}.mp3`, '', m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        } else {
          m.reply('El audio correspondiente no se encontró.');
        }
      } catch (err) {
        console.error(err);
        m.reply('Ocurrió un error al intentar enviar el audio.');
      }
      break;
    }
  }
};

handler.help = ['brook]
handler.customPrefix = /^(brook)/i;
handler.command = new RegExp;
handler.tags = ['Audios Dbz'] 
export default handler;