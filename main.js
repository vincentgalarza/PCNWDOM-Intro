const playlist = {
  name: 'United States Top 10',
  description: 'The top songs in the US right now.',
  songs: [
    {
      name: 'thank u, next',
      artists: ['Ariana Grande'],
      image: 'https://i.scdn.co/image/3492042deca1ed9a02e6d46ebe58807bbf8d2a51'
    },
    {
      name: 'Mo Bamba',
      artists: ['Sheck Wes'],
      image: 'https://i.scdn.co/image/099e0b63f08bea5b5616b2e6fb06c342da7071ad'
    },
    {
      name: 'SICKO MODE',
      artists: ['Travis Scott', 'Drake'],
      image: 'https://i.scdn.co/image/092f661e5290a05410f1696e608cb140461b7ebf'
    },
    {
      name: 'ZEZE (feat. Travis Scott & Offset)',
      artists: ['Kodak Black', 'Offset', 'Travis Scott'],
      image: 'https://i.scdn.co/image/817da8e0c3bcd24e19a02c2485f91c29699c1d8f'
    },
    {
      name: 'Drip Too Hard',
      artists: ['Lil Baby', 'Gunna'],
      image: 'https://i.scdn.co/image/d6ad16e502fb15fcc76bc050df10c6fd1cda6968'
    },
    {
      name: 'Without Me',
      artists: ['Halsey'],
      image: 'https://i.scdn.co/image/51f8ddb6e9f08b8d42a27f7894f68a9106a3df5f'
    },
    {
      name: 'Sunflower - Spider-Man: Intro',
      artists: ['Post Malone', 'Swae Lee'],
      image: 'https://i.scdn.co/image/923b854eefa3fe67c5089c45fb9efea4fbc5c7af'
    },
    {
      name: 'BAD!',
      artists: ['XXXTENTACION'],
      image: 'https://i.scdn.co/image/eba497599a8754e8458fc18e7feadb30aaa6eb0d'
    },
    {
      name: 'Lucid Dreams',
      artists: ['Juice WRLD'],
      image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
    },
    {
      name: 'Wake Up in the Sky',
      artists: ['Gucci Mane', 'Bruno Mars', 'Kodak Black'],
      image: 'https://i.scdn.co/image/6695a36b5929353cdb7d2e3807c600f73796e1aa'
    },
    {
      name: 'Armed And Dangerous',
      artists: ['Juice WRLD'],
      image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
    },
    {
      name: 'when the party\'s over',
      artists: ['Billie Eilish'],
      image: 'https://i.scdn.co/image/40aefbf33d89b6292973941739940b900a95e607'
    },
    {
      name: 'All I Want for Christmas Is You',
      artists: ['Mariah Carey'],
      image: 'https://i.scdn.co/image/770180da03a8e23ac5ff7847496e9538cf73ce85'
    }
  ]
};

const objectToHTML = (song) => {
  return `
  <div class='row mb-2'>
  <div class='col-1'>
    <img src="${song.image}" class="rounded" style='width: 50px; height: 50px;'>
  </div>
  <div class='col-11'>
    <p class='mb-0 mt-1 song-name'>${song.name}</p>
    <p class='my-0 song-artists'>${song.artists}</p>
  </div>
  </div>`
}

const state = {
  playlistTitle: playlist.name,
  playlistDescription: playlist.description,
  playlistSongs: playlist.songs,
}

const render = (state) => {
  let massHTML = '';

  const name = document.querySelector("h1")
  name.innerText = state.playlistTitle;

  const description = document.querySelector(".lead")
  description.innerText = state.playlistDescription;
  
  const songContainer = document.querySelector(".song-list");
  songContainer.innerHTML = "";
  
  let songs = state.playlistSongs;

  for (let i = 0; i < songs.length; i++) {
    massHTML += objectToHTML(songs[i]);
  }

  songContainer.innerHTML = massHTML;
}

render(state);

const input = document.querySelector('.js-input');
input.addEventListener('input', (e) => {
  // console.log(e);
  const songs = playlist.songs
  let songArr = [];
  songs.forEach((song) => {
    if (song.name.toLowerCase().includes(input.value.toLowerCase())) {
      songArr = songArr.concat(song);
    }
  })
  state.playlistSongs = songArr;
  // console.log(state.playlistSongs);
  render(state);
})



































































// let firstRun = true;
// let massHTML = "";

// const render = () => {
//   const titleNode = document.querySelector('h1');
//   const descriptionNode = document.querySelector('.lead');
//   const songsNode = document.querySelector('.song-list');

//   titleNode.innerText = playlist.name;
//   descriptionNode.innerText = playlist.description;

//   if (firstRun === true) {
//     playlist.songs.forEach((song) => {
//       massHTML += objectToHTML(song);
//     })
//     firstRun = false;
//   }
//   songsNode.innerHTML = massHTML;
// }

// render();

// const input = document.querySelector('.js-input');
// input.addEventListener('input', (e) => {
//   playlist.songs.forEach((song) => {
//     if (input.value === '') {
//       massHTML += objectToHTML(song);
//     } else if (song.name.toLowerCase().includes(input.value.toLowerCase())) {
//       massHTML += objectToHTML(song);
//     }
//   });
//   render();
// });




// let bigHTML = '';
// const daSongs = playlist.songs;
// daSongs.forEach((song) => {
//   bigHTML += objectToHTML(song);
// });

// const songsNode = document.querySelector('.song-list');
// songsNode.innerHTML = bigHTML;


// const state = {
//   playlistTitle: '',
//   playlistDescription: '',
//   playlistSongs: '',
// }

// const render = state => {
//   const titleNode = document.querySelector('h1');
//   const descriptionNode = document.querySelector('.lead');
//   const songsNode = document.querySelector('.song-list');

//   titleNode.innerText = state.playlistTitle;
//   descriptionNode.innerText = state.playlistDescription;
  
//   songsNode.innerHTML = state.playlistSongs;
// }

// const writeFunc = playlist => {
//   state.playlistTitle = playlist.name;
//   state.playlistDescription = playlist.description;
//   let massHTML = '';
//   const input = document.querySelector('.js-input');
//   input.addEventListener('input', () => {
//     console.log(input);
//     for (let i = 0; i < playlist.songs.length; i++) {
//       let currentSong = playlist.songs[i];
//       let currentSongName = currentSong.name;
//       console.log(currentSong.name);
//       if (currentSongName.toLowerCase().includes(input.value.toLowerCase())) {
//         console.log("HIIII");
//         massHTML += objectToHMTL(currentSong);
//         console.log(massHTML);
//       }
//     }
//   })
//   state.playlistSongs = massHTML;
//   render(state);
// }

// writeFunc(playlist);




// const input = document.querySelector('.js-input');
// input.addEventListener('input', () => {
//   let massHTML = '';
//   console.log(input);
//   for (let i = 0; i < playlist.songs.length; i++) {
//     let currentSong = playlist.songs[i];
//     let currentSongName = currentSong.name;
//     console.log(input.value)
//     if (currentSongName.toLowerCase().includes(input.value.toLowerCase())) {
//       console.log("true");
//       return massHTML += objectToHMTL(currentSong);
//       console.log(massHTML);
//     }
//   }
//   render();
// })