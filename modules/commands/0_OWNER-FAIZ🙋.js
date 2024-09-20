 const fs = require("fs");
module.exports.config = {
	name: "FAIZ1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Pih", 
	description: "no prefix command",
	commandCategory: "OWNER",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("or") ||
     react.includes("OWNER") || 
react.includes("Owner")) {
		var msg = {
				body: " ★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈✦\n\n★★᭄𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐆𝐑𝐎𝐏 𝐋𝐈𝐍𝐊 :\n\n✦  https://m.me/j/AbYZg4030gC9XmjT/ ✦ \n𝐁𝐎𝐒𝐒 𝐊𝐈 𝐈𝐃 𝐊𝐀 \n 𝐋𝐈𝐍𝐊😋 https://www.facebook.com/profile.php?id=100082052205053 ",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }