module.exports = {
	config: {
		name: "goiadmin",
		author: "cliff",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100023789902793") {
		var aid = ["100023789902793"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["𝐌𝐄𝐇𝐄𝐑𝐀𝐙👾", "tag dis na gf de gf, i love you", "𝗠𝗘𝗛𝗘𝗥𝗔𝗭 𝐌𝐄𝐇𝐄𝐑𝐀𝐙👾","Only 𝗠𝗘𝗛𝗘𝗥𝗔𝗭","𝗠𝗘𝗛𝗘𝗥𝗔𝗭 vai re kno dako?"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
