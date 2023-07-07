/**
 * F-Voice
 * @author Boylair
 */

const { Client } = require('discord.js-selfbot-v13');

const { joinVoiceChannel } = require('@discordjs/voice');


const client = new Client()

const path = require('path');

require('dotenv').config({path: path.join(__dirname, '..', './config/config.env')});

client.on('ready', async () => {


    console.clear();
    console.log((`
        Discord Voice 24/7
        ███████╗    ██╗   ██╗ ██████╗ ██╗ ██████╗███████╗
        ██╔════╝    ██║   ██║██╔═══██╗██║██╔════╝██╔════╝
        █████╗█████╗██║   ██║██║   ██║██║██║     █████╗  
        ██╔══╝╚════╝╚██╗ ██╔╝██║   ██║██║██║     ██╔══╝  
        ██║          ╚████╔╝ ╚██████╔╝██║╚██████╗███████╗
        ╚═╝           ╚═══╝   ╚═════╝ ╚═╝ ╚═════╝╚══════╝
                                                         
                                                    By: Boylair                                                                                                       
                                                                                                          
                     
                            Beta
                    User: ${client.user.tag}
                    Channel: ${process.env.voice_channel}
                            Made with ❤️
    `))

    console.log(`Logged in: ${client.user.tag}!`)

    // Fetch the voice channel
    const voiceChannel = await client.channels.fetch(process.env.voice_channel)

    // Join the voice channel
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });
    console.log(`Joined voice channel: ${voiceChannel.name}`);

// if you want to automatically disconnect from the voice channel uncomment this code snippet

/*

    // Leave the voice channel after a certain amount of time
    setTimeout(() => {
        connection.destroy();
        console.log(`Left voice channel: ${voiceChannel.name}`);
    }, 7260000); // 7200000ms = 2 hour

*/

})

client.login(process.env.token)



