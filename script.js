function playSong(){
    song.play();
    song.loop=true;
}

function pauseSong(){
    song.pause();
}

function volControl(){
    song.volume = slider.value/100;
}