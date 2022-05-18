console.log("Welcome to Rhythmify");
// initialize the variables 
let songIndex = 0;
let audioElement = new Audio('util/songs/1.mp3') 
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName")

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")) .forEach((element)=>{
        element.src = "util/icons/play.svg"
        
    })
}

let songItemPlay = document.getElementsByClassName("songItemPlay")

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        if (audioElement.paused) {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.src = "util/icons/pause.svg"
            audioElement.src = `util/songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.src = "util/icons/pause.svg"
            // audioElement.currentTime = 0 ;
            audioElement.play();
            gif.style.opacity = 1;
            e.target.src = "util/icons/pause.svg"
        }
        
        else{
            audioElement.pause()
            e.target.src = "util/icons/play.svg"
            masterPlay.src = "util/icons/play.svg"
            gif.style.opacity = 0;
            
        }
    })
})
const songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath:"util/songs/1.mp3", coverPath:"util/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath:"util/songs/2.mp3", coverPath:"util/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath:"util/songs/3.mp3", coverPath:"util/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath:"util/songs/4.mp3", coverPath:"util/covers/4.jpg"},
    {songName: "Janji - Heroes tonight", filePath:"util/songs/5.mp3", coverPath:"util/covers/5.jpg"},
    {songName: "GTA San Andreas - theme", filePath:"util/songs/6.mp3", coverPath:"util/covers/6.jpg"},
    {songName: "Led Zeppelin - Stairway to Heaven", filePath:"util/songs/7.mp3", coverPath:"util/covers/7.jpg"},
    {songName: "Shehenshah - Andheri Raaton Me", filePath:"util/songs/8.mp3", coverPath:"util/covers/8.jpg"},
    {songName: "Oliver Tree - Life Goes On", filePath:"util/songs/9.mp3", coverPath:"util/covers/9.jpg"},
    {songName: "Linkin Park - What I've done", filePath:"util/songs/10.mp3", coverPath:"util/covers/10.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

// Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.src = "util/icons/pause.svg"
        gif.style.opacity = 1;
    }
    
    else{
        masterPlay.src = "util/icons/play.svg"
        audioElement.pause()
        gif.style.opacity = 0;
        
    
    }
    
})
// Listen to events
audioElement.addEventListener("timeupdate", ()=> {
    console.log("timeupdate")
    // Update Seekbar
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) 
    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (audioElement.duration*myProgressBar.value/100)
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `util/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "util/icons/pause.svg"

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `util/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "util/icons/pause.svg"
})