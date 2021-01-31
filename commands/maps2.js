module.exports = {
    name: 'mira-vm',
    description: 'mira-vent-map',
    execute(message){
        //message.reply(`mira-vent-map:`);
        message.channel.send(">>> **Mira Vent Map:**", {files: ["map1.jpg"]});
        
    }
}