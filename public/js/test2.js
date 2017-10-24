
(function (ENV) {
const client_id = ENV.client_id;

//Authenticate with SoundCLoud
SC.initialize({
client_id: client_id
});





SC.get('/tracks', { q: 'rock' })
  .then(tracks => {
    console.log(tracks);

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
