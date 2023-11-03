const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    updatePresence();
});

const token = 'MTE2ODQ0OTYxOTUwMDQ4NjY5Ng.GRBE_w.GyW0mQHBRe6dPuLdDvKuuCpiKLz9ehQwD668Zk';
const serverId = '1103735747770601654'; // Your Discord server ID
setInterval(updatePresence, 5000);

function updatePresence() {
    const presence = document.getElementById('presence');
    const server = client.guilds.cache.get(serverId);

    if (server) {
        const serverName = server.name;
        const totalMembers = server.memberCount;
        const onlineMembers = server.members.cache.filter(member => member.presence.status !== 'offline').size;

        document.getElementById('serverName').textContent = serverName;
        document.getElementById('totalMembers').textContent = totalMembers;
        document.getElementById('onlineMembers').textContent = onlineMembers;
    }
}

client.login(token);


