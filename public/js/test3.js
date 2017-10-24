var submitBtn;
var searchBtn =  document.getElementById('search-box').value;
(function (ENV) {
const client_id = ENV.client_id;

//Authenticate with SoundCLoud
SC.initialize({
client_id: client_id
});

// takes the object passed by SC.stream and calls play() method
const playTrack = player => {
  player.play();
}
// takes the object passed by SC.stream and calls pause() method
const pauseTrack = player => {
  player.pause();
}
const initEventListeners = (player) => {
  var playBtn = document.querySelector('.play');
  var pauseBtn = document.querySelector('.pause');
  var volSlider = document.getElementById('volume');
  playBtn.addEventListener('click', () => playTrack(player));
  pauseBtn.addEventListener('click', () => pauseTrack(player));
  // attempted volume control - not very close to functional
  // volSlider.addEventListener('input', () => setVolume(player, volume));

}



function searchSC() {
    alert(q)}

//   SC.get('/tracks', {q: 'hello'}).then(function(tracks) {
//
//       firstTrack = tracks[0];
//
//
//
//   SC.stream('/tracks/' + firstTrack.id).then(function(player) {
//       initEventListeners(player);
//
//   });
//
// });
var searchBtn = document.getElementById('search-box').value;
var submitBtn= document.getElementById('submit');

submitBtn.addEventListener('click', () => searchSC(searchBtn));
function searchSC(q) {alert(q)}

})(ENV)
