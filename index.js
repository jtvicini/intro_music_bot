const Discord = require("discord.js");
var bot = new Discord.Client();
const {
	
	token,
} = require('./config.json');

const YTDL = require('ytdl-core');
global.servers = {};


function Play(connection, newMember, voiceChannel)
{
    (newMember.voiceChannel.id) = 634996343521148952;
    var server = servers[member.voiceChannel.id];
   // dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=ipDvCSL-hKg", {filter: "audioonly"}));
}
bot.on("ready", function()
{
console.log("ready");
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  member = newMember;
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

                            //me
      if (newMember.id === "245497820096888833"){
     newUserChannel.join()
        .then(connection =>{
            
            connection.playStream(YTDL("https://www.youtube.com/watch?v=YK4ThkJKqMo", {filter: "audioonly"}));
            setTimeout(() => {
              newUserChannel.leave();
            }, 27000);
        })

      }
                                //josh
      else if (newMember.id === "188134490718076938"){
        newUserChannel.join()
        .then(connection =>{
            
            connection.playStream(YTDL("https://www.youtube.com/watch?v=ZlpAAHar96E", {filter: "audioonly"}));
            setTimeout(() => {
              newUserChannel.leave();
            }, 27000);
        })



      }
                                //josiah
      else if (newMember.id === "195755130904248320"){
        newUserChannel.join()
        .then(connection =>{
            
            connection.playStream(YTDL("https://www.youtube.com/watch?v=TeNjhglXm6w", {filter: "audioonly"}));
            setTimeout(() => {
              newUserChannel.leave();
            }, 27000);
        })



      }
                                //dax
      else if (newMember.id === "328343049862381581"){
        newUserChannel.join()
        .then(connection =>{
            
            connection.playStream(YTDL("https://www.youtube.com/watch?v=H9T4NUnAmB4", {filter: "audioonly"}));
            setTimeout(() => {
              newUserChannel.leave();
            }, 27000);
        })



      }

      else{
        newUserChannel.join()
        .then(connection =>{
            
            connection.playStream(YTDL("https://www.youtube.com/watch?v=PNbBDrceCy8", {filter: "audioonly"}));
            setTimeout(() => {
              newUserChannel.leave();
            }, 27000);
        })
      }

  } 
  
  
  
  /*else if(newUserChannel === undefined){

    // User leaves a voice channel
    //Play(YTDL("https://www.youtube.com/watch?v=ipDvCSL-hKg", {filter: "audioonly"}));
  }
  */

})



bot.login(token);