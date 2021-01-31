module.exports = {
    name: 'hello',
    description: ' bot says hello',
    execute(message, args){
        var fs = require('fs');
        var characters = fs.readdirSync('char-roulette/characters');

        //generate random index to pick from characters
        const rand_i = Math.floor(Math.random() * characters.length);

        //send image
        message.channel.send("React with an emoji to claim!", {files: ["char-roulette/characters/" + characters[rand_i]]}).then(msg => {
            msg.awaitReactions((reaction, user) => user.id != msg.author.id && (reaction.emoji.name != '👍' || reaction.emoji.name == '👎'),
                { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().emoji.name == '👍') {
                        message.channel.send('replied with thumbs up');
                    }
                    else{
                        message.channel.send('replied with thumbs down');
                    }
                }).catch(() => {
                    message.reply('No reaction after 30 seconds, operation canceled');
        });
          })
       
        
    }
}