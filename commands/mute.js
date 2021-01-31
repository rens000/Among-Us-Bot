module.exports = {
    name: 'mute',
    description: 'mute players',
    execute(message, args){
        const channel = message.channel
        const members = channel.members   
          
        members.forEach(member => {
            try {
                member.voice.setMute(true);
              }
              catch(err) {}
            
        });
            
        message.channel.send('Server muted');
        
    }
    
}