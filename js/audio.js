function playsong(songs, rewindbtn, playbtn, nextbtn,){
    let current = 0;

    function play(){
        const song = songs[current]

        if (song.paused){
            song.play()
            playbtn.textContent = "Pause";
        }
            else{
                song.pause()
                playbtn.textContent = "Play";
            }
        }
    function rewind(){
        const song = songs[current]
        song.currentTime = 0;
        song.play();
    }
    function next(){
        songs.forEach(song => {
            song.pause()
            song.currentTime = 0;
        })
        current = (current + 1) % songs.length;
        songs[current].play();
    }


    playbtn.addEventListener("click", play);
    rewindbtn.addEventListener("click", rewind);
    nextbtn.addEventListener("click", next)
}
