module.exports = {
 config: {
	 name: "meheraz",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "meheraz") {
 return message.reply({
 body: " 「❥︎----ღ᭄_𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝗶𝗸𝘂𝗺 ..\n❥︎----ღ᭄_  BROTHER❞࿐.🌴.\n❥ MEHERAZ ISLAM\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗘𝗛𝗘𝗥𝗔𝗭 𝗜𝗦𝗟𝗔𝗠😉」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Gsh8Smm.jpeg")
 });
 }
 }
}
