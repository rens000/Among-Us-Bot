module.exports = {
    name: 'unmute',
    description: 'unmute players',
    execute(message, args){
        const channel = message.channel
        const members = channel.members
        if(args.length === 0) {
            members.forEach(member => {
                member.voice.setMute(false);
                
            });
        }
        
        else {
            members.forEach(member => {
                member.voice.setMute(false);
                
            });
            
            
            setTimeout(() => {  
                members.forEach(member => {
                    member.voice.setMute(true);
                    
                }); }, args[0]*1000);
        }
        

        
        }
        
    }