// Powered by spoty mtf

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "SPOTY~XMD~jUc2lBhK#KerD33u7-vywrdngkKtX0FlxP8AYvwxIykEW3zgqsF4",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SPOTY-XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qjkpw0.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SPOTY-XMD",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "SPOTY-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50946904797",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "sᴘᴏᴛʏ ᴍᴛғ",
// add bot owner name
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
MODE: process.env.MODE || "public",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// kick user if share link 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "50946904797",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// path to save deleted messages
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
