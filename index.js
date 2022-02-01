const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ult9.falix.gg',
    port: 39938,
    version: "1.17.1",
    username: 'Jamie',
    //auth: "mojang"
});


bot.on('kicked', console.log)
bot.on('error', console.log)

bot.on("move", ()=>{
    let friend = bot.nearestEntity();

    if (friend) {
        bot.lookAt(friend.position.offset(0, friend.height, 0));
    }
    
});
