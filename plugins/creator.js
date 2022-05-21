let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Ini Kak Owner Aespi Botz OωO',
jpegThumbnail: fs.readFileSync('./src/mikey.jpg')
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Ariel SP\nitem1.TEL;waid=6282118022072:6282118022072\nitem1.X-ABLabel: Creator\nitem2.EMAIL;type=INTERNET:arielsandypermana1@gmail.com\nitem2.X-ABLabel: Email\nitem3.URL:https://saweria.co/arielsp\nitem3.X-ABLabel: Rest Api\nitem4.ADR:;; Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel: Region | Sunda Empire \nitem5.X-ABLabel:[ ARIEL SP ]\nEND:VCARD"
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '.donasi', buttonText: {displayText: '💌 Donasi'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '🧾 Menu'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Itu Owner Ku Kak >ω<
*Jangan Di Apa Apain Kak Owner Ku.*
`.trim(),    footerText: ``,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
