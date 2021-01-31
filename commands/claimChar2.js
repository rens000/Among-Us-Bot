
//var hashMap = new Map();


module.exports = {
    name: 'roulette',
    description: ' bot says hello',
    execute(message, args){
        //import claimChar from 'char-roulette/claimChar.js';

        var fs = require('fs');
        var characters = fs.readdirSync('char-roulette/characters');

        //generate random index to pick from characters
        const rand_i = Math.floor(Math.random() * characters.length);
        const character = {files: ["char-roulette/characters/" + characters[rand_i]]};
        //send image
        message.channel.send(":stars:\t **React with an emoji to claim!** \t:stars:", character).then(msg => {
            msg.awaitReactions((reaction, user) =>  { 

                        /*hashMap.set(user.id, []);
                        let member_list = hashMap.get(user.id);
                        member_list.push(character);
                        message.channel.send(member_list.length);*/
                        
                        //claimChar(user.id, characters[rand_i]);
                        //read/parse player_data.txt
                        var fs = require('fs');
                        var userID = user.id;
                        var charImage = characters[rand_i];

                        //read file
                        var contents = fs.readFileSync('char-roulette/player_data.txt', 'utf8').replace(/\r/g, "").split(/\n/);

                        //check if person owns this character
                        var words = [];
                        var relIndex = -1;
                        //loop through every line to find the line that starts with the user's userID
                        for (var line_i = 0; line_i < contents.length; line_i++) {
                            words = contents[line_i].split(",");
                            if (words[0] === userID) {
                                relIndex = line_i;
                                break
                            }
                        }

                        if (relIndex == -1) { //if user is not found in the text file
                            contents.push(userID);
                            relIndex = contents.length - 1;
                        } else {
                            //loop through the words in the user's line 
                            //to see if any of the images match the image they are currently trying to claim
                            //if they already own the character/image, return false
                            for (var word_i = 0; word_i < words.length; word_i++){
                                if (words[word_i] === charImage) {
                                    message.channel.send("**You already own this character!**");
                                    return false
                                }
                            }
                        }

                        //if they do not own the character, add this character to their line in the text file
                        contents[relIndex] = contents[relIndex] + "," + charImage;

                        //reconcatenate all of the lines
                        var newText = "";
                        for (var line_i = 0; line_i < contents.length; line_i++){
                            newText = newText + contents[line_i] + "\n";
                        }

                        //update the text file
                        fs.writeFile('char-roulette/player_data.txt', newText, function (err) {
                            if (err) throw err;
                            message.channel.send(":star2: **Character claimed!** :star2:");
                        });
                    
                        
                }).catch(() => {
                    message.reply('No reaction after 30 seconds, operation canceled');
                });
            
        });
    }
}  
/*

function claimChar2(character, user){
    message.guild.fetchMember(user).then(member => {
        hashMap.set(member, []);
        let member_list = hashMap.get(member);
        member_list.push(character);
    });
}
*/


