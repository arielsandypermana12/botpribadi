let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag the person!`
    if (global.prems.includes(who.split`@`[0])) throw 'Dia Sudah Unlimited'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} Limit Unlimited`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['limitunlimited [@user]']
handler.tags = ['owner']
handler.command = /^(add|limit|\+)unlimited$/i

handler.rowner = true

module.exports = handler
