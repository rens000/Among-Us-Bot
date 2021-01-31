module.exports = {
    name: 'collection',
    description: 'display a user\'s owned characters',
    execute(message, args){
        var fs = require('fs');
        var userID = message.author.id;

        //dictionary linking the image files to the character name
        var characterDict = {'killer-pumpkin.png': 'The Killer Pumpkin', 'muscle.jpg': 'Muscle Man', 'accuser.png': 'The Accuser', 'dead.png': 'Dead Guy', 'astro.png': 'The Real Astronaut'};

        //read file
        var contents = fs.readFileSync('char-roulette/player_data.txt', 'utf8').replace(/\r/g, "").split(/\n/);

        //check if person owns this character
        var words = [];
        var check = -1;
        //loop through every line to find the line that starts with the user's userID
        for (var line_i = 0; line_i < contents.length; line_i++) {
            words = contents[line_i].split(",");
            if (words[0] === userID) {
                check = 0;
                break
            }
        }

        if (check == -1) { //user is not found in the text file
            message.reply("**You have not claimed any characters! Use *!roulette* to roll and claim characters.**")
        }

        //concatenate string to be displayed
        var display = '>>> **' + message.author.username + "'s Collection**\n"; 
        words.shift();
        for (var word_i = 0; word_i < words.length; word_i++) {
            display = display + characterDict[words[word_i]] + "\n";
        }

        //display
        message.channel.send(display);

    }
}