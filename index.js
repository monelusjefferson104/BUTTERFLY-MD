const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const fs = require("fs");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info");
    
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const from = msg.key.remoteJid;
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
        
        console.log(`[MESSAGE] ${from}: ${text}`);

        if (text === "!ping") {
            await sock.sendMessage(from, { text: "Pong! 🏓" });
        }
        else if (text === "!info") {
            await sock.sendMessage(from, { text: "🤖 BUTTERFLY-MD Bot actif !" });
        }
    });
}

startBot().catch((err) => console.error("Erreur:", err));
