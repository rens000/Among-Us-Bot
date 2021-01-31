module.exports = {
    name: 'randomize',
    description: 'Generate random game settings.',
    execute(message){
        /*
        Settings:
            Confirm Ejects : boolean
            # Emergency Meetings : int (between 0 and 9)
            Anonymous Voting : boolean
            Emergency Cooldown : int (between 0 and 60)
            Discussion Time : int (between 0 and 120)
            Voting Time : int (between 0 and 300)
            Player Speed : float (between 0,5 and 3)
            Crewmate Vision : float (0.25 to 5.0)
            Imposter Vision : float (0.25 to 5.0)
            Kill Cooldown : float (10.0 to 60.0)
            Kill Distance : short, normal, long
            Task Bar Updates : always, meetings, never
            Visual Tasks : always, meetings, never
            Common Tasks : int (0 to 2)
            Long Tasks : int (0 to 3)
            Short Tasks : int (0 to 5)
        */

        var ejects = Math.random();
        const numEmergency = "**Number of Emergency Meetings:** " + Math.floor(Math.random() * 10) + "\n";
        var anonVoting = Math.random();
        const emerCooldown = "**Emergency Cooldown:** " + Math.floor(Math.random() * 61) + "\n";
        const discussTime = "**Discussion Time:** " + Math.floor(Math.random() * 121) + "\n";
        const votingTime = "**Voting Time:** " + Math.floor(Math.random() * 301) + "\n";
        const playerSpeed = "**Player Speed:** " + (Math.round((Math.random() * 4) * 2) / 2).toFixed(1) + "\n";
        const crewVision = "**Crewmate Vision:** " + (Math.round((Math.random() * 6) * 2) / 4).toFixed(2) + "\n";
        const impVision = "**Imposter Vision:** " + (Math.round((Math.random() * 6) * 2) / 4).toFixed(2) + "\n";
        const killCooldown = "**Kill Cooldown:** " + (Math.round((Math.random() * 51) * 2) / 2 + 10.0).toFixed(1) + "\n";

        let distances = ['Short', 'Medium', 'Long'];
        let killDistance = "**Kill Distance:** " + distances[Math.floor(Math.random() * 3)] + "\n";

        let updates = ["Always", "Meetings", "Never"];
        let meetingUpdates = "**Task Bar Updates:** " + updates[Math.floor(Math.random() * 3)] + "\n";
        let visuals = "**Visual Tasks:** " + updates[Math.floor(Math.random() * 3)] + "\n";

        const commonTasks = "**Common Tasks:** " + Math.floor(Math.random() * 3) + "\n";
        const longTasks = "**Long Tasks:** " + Math.floor(Math.random() * 4) + "\n";
        const shortTasks = "**Short Tasks:** " + Math.floor(Math.random() * 6) + "\n";

        if (ejects > 0.5) {
            ejects = "**Confirm Ejects:** On\n";
        } else {
            ejects = "**Confirm Ejects:** Off\n";
        }

        if (anonVoting > 0.5) {
            anonVoting = "**Anonymous Voting:** On\n";
        } else {
            anonVoting = "**Anonymous Voting:** Off\n";
        }

        message.channel.send(">>> Your Random Game Settings: \n\n" + ejects + numEmergency + anonVoting + emerCooldown + discussTime + 
           votingTime + playerSpeed + crewVision + impVision + killCooldown + killDistance + 
           meetingUpdates + visuals + commonTasks + longTasks + shortTasks);
    }
}