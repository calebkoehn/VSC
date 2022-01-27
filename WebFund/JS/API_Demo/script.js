var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");
var lyrics = document.getElementById("lyrics");

async function getLyrics(){
    var response = await fetch(`https://api.lyrics.ovh/v1/${artist.value}/${songTitle.value}`);
    var data = await response.json();

    lyrics.innerText = data.lyrics;
}