const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22891223014";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllKNUxiblRrS1ZLRlpiaGh6aXc5YzNqQjQ0SkZlSk1mSUE1L1JwbnJJVkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI4OTEyMjMwMTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxQTYyNEFBNEQ0QjhFQzY2RTREOEFGMUE1RDU1MzRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYwMDkwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPQy0zMGdzRFQtR29Cd0w5dEZWemNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1ZGU2OWRiLWIxMzEtNDY3My05OGQzLTQ3OGIyZTM0MjcyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgMTU1LFxuICAgICAgMjU0LFxuICAgICAgMjA5LFxuICAgICAgMTM4LFxuICAgICAgMjMxLFxuICAgICAgOTEsXG4gICAgICA1MyxcbiAgICAgIDg2LFxuICAgICAgODgsXG4gICAgICAyMDIsXG4gICAgICAyMyxcbiAgICAgIDE1OCxcbiAgICAgIDE4MyxcbiAgICAgIDIyOSxcbiAgICAgIDE1NCxcbiAgICAgIDI1MixcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDgzLFxuICAgICAgMjUsXG4gICAgICA2NyxcbiAgICAgIDE3OCxcbiAgICAgIDIwOCxcbiAgICAgIDE4NCxcbiAgICAgIDE4MixcbiAgICAgIDcxLFxuICAgICAgNDcsXG4gICAgICAxOTUsXG4gICAgICAzMyxcbiAgICAgIDE5MyxcbiAgICAgIDIzNixcbiAgICAgIDE1OCxcbiAgICAgIDE4NCxcbiAgICAgIDc4LFxuICAgICAgNzAsXG4gICAgICAxMzIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCUVRFQ0w4OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTEyMjMwMTQ6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MzUxNjUwMDAyOTQ3Mzo5MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPclk2WklDRU1LU3ViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk10c25KejNWZnY2b3p1UGd5T2tVbElNK1dxMzRjejc2amowVVZYY3JNd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTZEMG1QYk03c2lqTmE0Zkh5R3N6ampvQWlsTW9CMWQxYzlmTnlIeFBMVkp3V0xaSXVvRllJZ1YrMXZuWlMvOFVyTmpLQUx6SDhISllscWlua0dCRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYW4zU05oSXBTTDhHKzhWQnNHWStXdk02a2VBZEhCYzcwcFZldWw0VzJZdlhHV0pNd2VBOEhmN0NSOTJmcmxrMDRqZlJvRkVEaG4vNUhjSkVhYW1WZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTEyMjMwMTQ6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MDA5MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFURy5qc29uIjogIntcImtleURhdGFcIjpcIjMzSTNoRVlQLzV3elM4TElNbmQrYTNGem8vN2Zia0d5YUM4QnZ3b003M1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTc2MzUxMzM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTYwNjQzMTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
