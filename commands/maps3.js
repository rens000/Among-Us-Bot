module.exports = {
    name: 'polus-vm',
    description: 'Polus-vent-map',
    execute(message){
        //message.reply(`Polus-vent-map:`);
        message.channel.send(">>> **Polus Vent Map:**", {files: ["map2.jpg"]});
        
    }
}