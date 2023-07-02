let audioElement = new Audio("music/5.mp3");
let Index = 0;
let masterplayer = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let songitems = Array.from(document.getElementsByClassName("song1"));
let songitemplay = document.querySelectorAll('songitemplay');
let a = false;
let songs=[
    {songName:"hymn_for_the_weakend", filePath:"music/1.mp3",coverPath:"sea.jpg"},
    {songName:"As_It_Was", filePath:"music/2.mp3",coverPath:"sea.jpg"},
    {songName:"Nightlight", filePath:"music/3.mp3",coverPath:"sea.jpg"},
    {songName:"Night_Changes", filePath:"music/4.mp3",coverPath:"sea.jpg"},
    {songName:"Nightcore_-_La_la_la", filePath:"music/5.mp3",coverPath:"sea.jpg"}
]
// audioElement.play(); 
songitems.forEach((element, i)=>{
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName
})
masterplayer.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterplayer.classList.remove("ri-play-fill");
        masterplayer.classList.add("ri-pause-fill");
    }
    else{
        audioElement.pause()
        masterplayer.classList.remove("ri-pause-fill");
        masterplayer.classList.add("ri-play-fill");   
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change', ()=>{
    sync=progressbar.value * audioElement.duration/100;
    audioElement.currentTime = sync;
})

const makeall= ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("ri-pause-fill");
        element.classList.add("ri-play-fill");
        element.style.opacity = 0;
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeall();
        e.target.classList.remove("ri-play-fill");
        e.target.classList.add("ri-pause-fill");
        e.target.style.opacity = 1;
        Index = parseInt(e.target.id);
        audioElement.src = `music/${Index}.mp3`;
        audioElement.play();
        // makeall();
        audioElement.currentTime=0;
        masterplayer.classList.remove("ri-play-fill");
        masterplayer.classList.add("ri-pause-fill");
        a= true;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(Index>=5){
        Index=1
    }
    else{
        Index+=1;
    }
    audioElement.src = `music/${Index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplayer.classList.remove("ri-play-fill");
    masterplayer.classList.add("ri-pause-fill");

})

document.getElementById('previous').addEventListener('click',()=>{
    if(Index<=1){
        Index=5
    }
    else{
        Index-=1;
    }
    audioElement.src = `music/${Index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplayer.classList.remove("ri-play-fill");
    masterplayer.classList.add("ri-pause-fill");
})

// if(audioElement==audioElement.paused()){
//     for(i=0;i<=songitemplay.length;i++){
//         songitemplay[i].classList.remove("ri-play-fill");
//         songitemplay[i].classList.add("ri-pause-fill");
//     }
// }