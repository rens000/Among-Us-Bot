/*export function claimChar(userID, charImage){
    //read/parse player_data.txt
    var fs = require('fs');

    var contents = fs.readFileSync('char-roulette/player_data.txt', 'utf8').replace(/\r/g, "").split(/\n/);

    //check if person owns this character
    var words;
    var relIndex;
    //loop through every line to find the line that starts with the user's userID
    for (var line_i = 0; line_i < contents.length; line_i++) {
        words = contents[line_i].split(",");
        relIndex = line_i;
        if (words[0] === userID) {break}
    }

    //loop through the words in the user's line 
    //to see if any of the images match the image they are currently trying to claim
    //if they already own the character/image, return false
    for (var word_i = 0; word_i < words.length; word_i++){
        if (words[word_i] === charImage) {
            message.channel.send("You already own this character!");
            return false
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
        message.channel.send("Character claimed!");
    });

}*/