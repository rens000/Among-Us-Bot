module.exports = {
    name: 'map',
    description: 'show maps with vents',
    execute(message, args){
        var mapName = args[0].toLowerCase();
        if (mapName == 'skeld') {
            message.channel.send(">>> **Skeld Vent Map:**", {files: ["map3.jpg"]});
        }
        else if(mapName == 'mira') {
            message.channel.send(">>> **Mira Vent Map:**", {files: ["map1.jpg"]});
        }
        else if(mapName == 'polus') {
            message.channel.send(">>> **Polus Vent Map:**", {files: ["map2.jpg"]});
        }  
    }
}
