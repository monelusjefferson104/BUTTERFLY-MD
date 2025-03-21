/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : INCONNU BOY <https://github.com/aloneboytech>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||{"noiseKey":{"private":{"type":"Buffer","data":"wNj0oyMeNZiqfe6l6A7PF2XRcN1SqbNhuhNKhWFBJ0I="},"public":{"type":"Buffer","data":"B532Y48qnGhFx4z8exikx8m5kelfpKbyjfrGpQeUBg8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QNicsPP5ziT460V71tFUBTczrs/uSRviM3HMd44pBUc="},"public":{"type":"Buffer","data":"hQYotUtcCQupG12QGrZY9ZFG2EAMQUt9mJENA0XnOWU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+BB4F4nn0X/lG/0UEpsGTf3W7ac8FTMKzWdngEa4RWY="},"public":{"type":"Buffer","data":"I7bPDvWD678trUjFWZPyKgl6xU0lwHup/GNnyyiBSFI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MBuaS9maTuYQV0JBX9EB0vrnWX3Myd6ZqqME0EDyBGQ="},"public":{"type":"Buffer","data":"SSQlf8I5UC3wJYbnD5UOmxXn+AoKiCLy6OJ5GlUfe2Q="}},"signature":{"type":"Buffer","data":"El++4Dm72Esr1bJ7uv79ubxs+mXTH5dmSpOx5nTUAXauuE+v+CPCX6yRsIlJfDoNmL3++c+IlqbTVb5kTaHMDw=="},"keyId":1},"registrationId":254,"advSecretKey":"ejxlh50NKvDfeMF4BrdOYqT/Cs5iU4bSMUJ8Vs9LRiM=","processedHistoryMessages":[{"key":{"remoteJid":"243907687002@s.whatsapp.net","fromMe":true,"id":"3D09FB4B64D667416AA1921F5697AE18"},"messageTimestamp":1742577127}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"x3bSr9rEQJ-94Z82iBHTZQ","phoneId":"caa8a2a3-de8c-48f2-95dd-90c2862184b8","identityId":{"type":"Buffer","data":"bZFkEvwDEfmyVfAOaFoRQEkjlZc="},"registered":true,"backupToken":{"type":"Buffer","data":"Z+0A5pBl1MZQyvX0tGS19fnSEkI="},"registration":{},"pairingCode":"6F7WEN7S","me":{"id":"243907687002:1@s.whatsapp.net","lid":"219082574061650:1@lid","name":"☠️⃟≛⃝ ♱𝐊𝚫𝚵𝐋🦋🦋 𝚴𝚯𝐂𝚻𝐔𝐑𝚴𝚵"},"account":{"details":"CLLW/GQQ0bv2vgYYASAAKAA=","accountSignatureKey":"GJp6kAOsYUIgHVNd0Ycz+xJZR7l1TRnrPemk7+lg8Bs=","accountSignature":"cbtJNzV1VcDQDRYkEdmFT9/CXqEze5LcBj60cXPwa2jEZnDxfFhkJeZH5Qff5WgAKhZ1iT2uu5nZeGXwZt46DQ==","deviceSignature":"4AyYzJLPkYUkuBRP9Zl1zmrgA5XFyAq5JPEjsFcuoRaO3P0lCx+vmRmGxzkhjea/CBLVcslXHDrjw5WEJSZfBQ=="},"signalIdentities":[{"identifier":{"name":"243907687002:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRiaepADrGFCIB1TXdGHM/sSWUe5dU0Z6z3ppO/pYPAb"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0ICA=="},"lastAccountSyncTimestamp":1742577117,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAAFVh"}
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "your alive image url",
MENU_IMG: process.env.MENU_IMG || "your menu pic url",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『 BUTTERFLY MD 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
