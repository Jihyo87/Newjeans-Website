// Variables for DOM
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const navul = document.querySelector("nav ul")
const navy = document.querySelectorAll("nav a")
const hamburger = document.getElementById("hamburger")
// Header and Nav Sticky
window.addEventListener("scroll",  () =>{
    if(window.scrollY > 555){
        nav.style.background = "black";
        nav.style.position = "sticky";
        nav.style.top = "0"
        header.style.background = "black";
        header.style.position = "sticky";
        header.style.top = "0";
        navy.forEach(links => {
            links.style.color = "deepskyblue"
        })

    }else{
        nav.style.background = "transparent"
        header.style.background = "transparent"
    }
})

hamburger.addEventListener("click", () =>{
    navul.classList.toggle("show")
})






// Dom variables for Play, next and rewind button 1st album
const firstSong = document.querySelectorAll(".firstsong")
const playbtn = document.getElementById("playbtn")
const nextbtn = document.getElementById("nextbtn")
const rewindbtn = document.getElementById("rewindbtn")
const firsttitlesong = document.querySelectorAll(".firstalbumlist1 h5")

let current = 0;
// play button
playbtn.addEventListener("click", () => {
    const song = firstSong[current];
    if (song.paused) {
        firsttitlesong[current].style.color = "red"
        firsttitlesong[current].style.textShadow =
            "0 0 5px rgba(255, 165, 0, 0.8), " +
            "0 0 10px rgba(255, 200, 0, 0.6)";
        playbtn.textContent = "Pause";
        song.play();
    } else {
        song.pause();
        firsttitlesong[current].style.textShadow = "none"
        firsttitlesong[current].style.color = "black"
        playbtn.textContent = "Play";
    }
});
// rewind button
rewindbtn.addEventListener("click", () =>{
    const song = firstSong[current];
    if(song.play()){
        firsttitlesong[current].style.color = "red";
        song.currentTime = 0;
        playbtn.textContent  = "Pause"
    }
})
// next button
nextbtn.addEventListener("click", () =>{
    const list = [
        document.getElementById("attention"),
        document.getElementById("hypeboy"),
        document.getElementById("cookie"),
        document.getElementById("hurt")
    ]
    // when the user click next it won't continue playing the last track
    list.forEach(song => {
        song.pause()
        song.currentTime = 0;
    })
    firsttitlesong[current].style.color = "black"
    current = (current + 1) % list.length;
    list[current].play()
    playbtn.textContent = "Pause";
    firsttitlesong[current].style.color = "red"
})
// 2nd album Dom variables
const SecondSongs = document.querySelectorAll(".secondsong")
const secondplay = document.getElementById("secondplay")
const secondrewind = document.getElementById("secondrewind")
const secondnext = document.getElementById("secondnext")
const SecondHeading = document.querySelectorAll(".secondalbumlist h5")

secondplay.addEventListener("click", () => {
    const song = SecondSongs[current];
    if (song.paused) {
        SecondHeading[current].style.color = "red"
        secondplay.textContent = "Pause";
        song.play();
    } else {
        song.pause();
        SecondSongs[current].style.color = "black"
        secondplay.textContent = "Play";
    }
});
secondrewind.addEventListener("click", () => {
    const song = SecondSongs[current];
    if(song.play()){
        song.currentTime = 0
        secondplay.textContent = "Pause"
        SecondHeading[current].style.color = "red"
    }
})
secondnext.addEventListener("click", () => {
    const list = [
        document.getElementById("omg"),
        document.getElementById("ditto")
    ]
    // when the user click next it won't continue playing the last track
    list.forEach(song => {
        song.pause()
        song.currentTime = 0;
    })
    SecondHeading[current].style.color = "black"
    current = (current + 1) % list.length ;
    list[current].play()
    secondplay.textContent = "Pause";
    SecondHeading[current].style.color = "red"
})
