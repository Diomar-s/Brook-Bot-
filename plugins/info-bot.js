import fs from 'fs';
import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot/i.test(m.text)) {
conn.reply(m.chat, `*👻 ¡Hola! Soy El principe de los saiyans en que puedo ayudarte hoy sabandija?  \n\n✰ Usa *.menu* para ver mis comandos insecto.*`, m, rcanal, )
}
