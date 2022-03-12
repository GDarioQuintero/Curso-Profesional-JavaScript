import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const player = new MediaPlayer( {el: video, 
    plugins: [
    //new AutoPlay()
]} );

const boton_play = document.getElementById("boton_play");
boton_play.onclick = () => player.togglePlay();

const boton_mute = document.getElementById("boton_mute");
boton_mute.onclick = () => player.toggleMute();

 