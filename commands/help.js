module.exports = {
    name: 'help',
    description: 'sends a list of all available commmands',
    execute(message, args){
        message.channel.send('>>> \n**!HELP** :dizzy:  \n\n' + 
        '**!mute**\t-\tmutes all players in your voice channel \n' +
        '**!unmute <number of seconds>**\t-\tunmutes all players for inputted length (generally the length of the discussion and vote time) \n\n' + 
        '**!map <name of map>**\t-\tdisplays inputted map with vent passages highlighted; \n'+ 
        '\t Available maps: Skeld, Polus, Mira \n\n' +
        '**!randomize**\t-\tgenerate some random game settings for a fun time! \n\n' +
        '**!roulette**\t-\troll a random Among Us character; collect as many as you can!\n' +
        '**!collection**\t-\tview the characters in your collection\n.');

    }
}