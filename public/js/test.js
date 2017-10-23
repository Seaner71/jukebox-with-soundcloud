
(function (ENV) {
const client_id = ENV.client_id;

//Authenticate with SoundCLoud
SC.initialize({
client_id: client_id
});

const trackTemplate = track => {
  return '<h1>' + track.title + '</h1>'
}

const buildTrackTemplates = tracks => {
  return tracks.map(track => trackTemplate(track)).join('');
}

const renderTracks = (tracks, target) => {
  target.innerHTML = buildTrackTemplates(tracks);
}

const playTrack = player => {
  player.play();
}

const pauseTrack = player => {
  player.pause();
}

const initEventListeners = () => {
  var playBtn = document.getElementById('play');
  var pauseBtn = document.getElementById('pause');
  playBtn.addEventListener('click', playTrack);
  pauseBtn.addEventListener('click', pauseTrack);
}


var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');


SC.get('/tracks', { q: 'rock' })
  .then(tracks => {
    console.log(tracks);
    buildTrackInfo(tracks);
  })
  .then(() => {
    const trackList = document.querySelector('.artist-div').children;

    for (let i = 0; i <  trackList.length; i++) {
      let track = trackList[i];
      renderTracks(tracks, trackList);
    }
  })


function selectTrack() {
  SC.stream('/tracks/' + track.id)
  .then(player => {
    initEventListeners();
  })
}

})(ENV)













//renderTracks(tracks, document.getElementById('track-list'))
