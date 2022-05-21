let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *No Enc Full* : *Rp 40K*
╠➥ *All Payment :* https://saweria.co/arielsp
╠═〘 PEMBAYARAN MENDUKUNG 〙 ═
╠➥ Dana Ovo Gopay
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Aespi Botz
╠═ Scrip original by Ariel SP
╠═〘 ArielSP 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Gopay', '#viagopay', m)
}

handler.command = /^sewabot$/i

module.exports = handler
