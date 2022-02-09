const music = document.querySelector('audio');
const img = document.querySelector('img');

const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const title = document.getElementById('title');
const artist = document.getElementById('artist');


const songs = [
    {
        name: 'Lights_out',
        title: "Lights Out",
        artist: "Eminem"
    },
    {
        name: "Main_bola_hey",
        title: "main bola hey",
        artist: "Karthik Rao"
    },
    {
        name: "Thunder",
        title: "Thunder",
        artist: "Imagine Dragons"
    }
];


let isPlaying = false;


// for playing music
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animate');
}


// for plausing music
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animate');
}


// on clicking play/pause
play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});



const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

let song_index = 0;

const nextSong = () => {
    song_index = (song_index + 1) % songs.length;
    loadSongs(songs[song_index]);
    playMusic();
};

const prevSong = () => {
    song_index = (song_index + songs.length - 1) % songs.length;
    loadSongs(songs[song_index]);
    playMusic();
};


// on clicking next
next.addEventListener('click', nextSong);

// on clicking prev
prev.addEventListener('click', prevSong);