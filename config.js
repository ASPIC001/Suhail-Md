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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVJOYlRLR2RvaTRBWld6TFZEbFFRaXA4MnltM0JvNFY2OUxGK2JUaCs5WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmlGblMyd2hSQi1tZkJvZm9paGhDd1wiLFxuICBcInBob25lSWRcIjogXCIxMjYyZjk2MS0zZDVjLTQ4MzEtYmQ0Yi05NDUxMWEwMTNkNzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICA4LFxuICAgICAgMTgzLFxuICAgICAgMTE4LFxuICAgICAgMjUsXG4gICAgICAxNzAsXG4gICAgICAyMDUsXG4gICAgICAxODMsXG4gICAgICAxMzAsXG4gICAgICA4MyxcbiAgICAgIDE0MCxcbiAgICAgIDc0LFxuICAgICAgMjEsXG4gICAgICAyMDcsXG4gICAgICAxOTgsXG4gICAgICA0OCxcbiAgICAgIDU1LFxuICAgICAgMjIsXG4gICAgICAwLFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMjMyLFxuICAgICAgMjM2LFxuICAgICAgNzEsXG4gICAgICAxMjQsXG4gICAgICAyNixcbiAgICAgIDExNixcbiAgICAgIDg3LFxuICAgICAgMTg0LFxuICAgICAgMjE2LFxuICAgICAgMjE4LFxuICAgICAgMTI1LFxuICAgICAgMjQ2LFxuICAgICAgMTAzLFxuICAgICAgMTc1LFxuICAgICAgODksXG4gICAgICAxNTcsXG4gICAgICAxNzMsXG4gICAgICAyNDksXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFc5TTVKSFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODkxMjIzMDE0Ojk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM1MTY1MDAwMjk0NzM6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNZNlpJQ0VJS1V2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNdHNuSnozVmZ2Nm96dVBneU9rVWxJTStXcTM0Y3o3NmpqMFVWWGNyTXdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNMZm5kWENRazE1Vzh3M2RqMnJoMXlkTFJxQmozSEpseGYxU2dNMnphdFM3K2JWcExVNndza2pqaUhtTzlLZk15V2lLYTBUNldYTmR1cEsway9NRkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhQWjM3SFVQZ3B4YU4zbnFCcmpjbmZYbDk4WnROb1RqeWJMTkF0NHZ3cE5DaHNLRVl2UENaR3phdHhQRnNKMVdoZUdUVEF4MTFaRVlJWW1UWVAyaURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODkxMjIzMDE0Ojk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjgzMDE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVRNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBVE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJySTE2SG4vUG85MUNPdU5vWU1oTDdXSTZFUDJrM3VoUWZwY0t2ckREQkJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3NjM1MTMzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYyMDA4MTg2OFwifSIKfQ=="  // PUT your SESSION_ID 


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
