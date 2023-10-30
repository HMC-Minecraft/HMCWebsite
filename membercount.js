const Discord = require('discord.js');
const fs = require('fs');

// Load the configuration file
const config = JSON.parse(fs.readFileSync('config.json'));

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    updatePresence();
});

const token = config.token;
const serverId = config.serverId;

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



        const serverIcon = document.getElementById('serverIcon');
        serverIcon.src = serverIconURL;
        serverIcon.alt = serverName;
    }
}

client.login(token);


