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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWxiQmZLeW9NZWZNZUdiamgvVEdYbnhxKzd1aXlJSGZDMGl6cTcvYWpWRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQk9HLUlGWHFUbjJac2JHcjl6VG5nZ1wiLFxuICBcInBob25lSWRcIjogXCJkNWQwMDQ0Ny0yMmNhLTRmNjAtYmJlMS0yOTQ1NzY1ODU4MWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMjE2LFxuICAgICAgMTk2LFxuICAgICAgMjIxLFxuICAgICAgMTUsXG4gICAgICAxMTEsXG4gICAgICAxMzQsXG4gICAgICAyLFxuICAgICAgMTE4LFxuICAgICAgMjI3LFxuICAgICAgMTY1LFxuICAgICAgMTQ3LFxuICAgICAgMTc3LFxuICAgICAgMjQsXG4gICAgICA2LFxuICAgICAgMTgzLFxuICAgICAgMjUsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDYsXG4gICAgICAxMCxcbiAgICAgIDYxLFxuICAgICAgMjU0LFxuICAgICAgMTQxLFxuICAgICAgMTAwLFxuICAgICAgMjUxLFxuICAgICAgMjAzLFxuICAgICAgNDgsXG4gICAgICAxMDIsXG4gICAgICAxNTMsXG4gICAgICAxODMsXG4gICAgICAxNzUsXG4gICAgICA5LFxuICAgICAgMTUzLFxuICAgICAgOTMsXG4gICAgICAxNTUsXG4gICAgICA5MyxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNjFUNDc2SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTEyMjMwMTQ6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MzUxNjUwMDAyOTQ3Mzo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPelk2WklDRUwzS3VyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk10c25KejNWZnY2b3p1UGd5T2tVbElNK1dxMzRjejc2amowVVZYY3JNd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEVQQ2l5dVZldU82NjNDN1FLRHBDNHRSTnJzdVB4L1lkZUZielI2N2FhRldGNGVRT3FKNFQreGIrSzlQM1VZeThSTGZFVmJVVkV5eE5kVHo1czNqQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVlFSEZnNnpibmh4MjlJWldnT0FlVUJSS3A0cFoyaEhDcEQ1R1MwVGFVclBIbDVJUkpSeHBTclorczlCaGdtMEdsaENwQ0p5V0hIQUx6TUFIc3ppRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTEyMjMwMTQ6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MjQ0NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFUTS5qc29uIjogIntcImtleURhdGFcIjpcInJJMTZIbi9QbzkxQ091Tm9ZTWhMN1dJNkVQMmszdWhRZnBjS3ZyRERCQkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTc2MzUxMzM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNjIwMDgxODY4XCJ9Igp9"  // PUT your SESSION_ID 


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
