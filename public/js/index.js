var track;
var trackList;
/*
What works:
  1. rendering properties and values from object obtained hard coded SC.get search
  2. playing and pausing the first element in the array from SC.get
  3. getting search input value and getting it to alert but unable to wrap the SC.get to populate the query with search value

What i want to work:
  1. get the search input to update the SC.get reuqest parameter
  2. select the result of the SC>get and choose the element to play/pause.
  3. Allow user to use the setVolume() using a range input "slider"


*/
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

//  attempt at using volume control
// const setVolume = (player, volume) => {
//   player.setVolume(volume);
// }

// event listeners for play, pause buttons work- submit on the search and volume not working
const initEventListeners = (player) => {
  var playBtn = document.querySelector('.play');
  var pauseBtn = document.querySelector('.pause');
  var volSlider = document.getElementById('volume');
  playBtn.addEventListener('click', () => playTrack(player));
  pauseBtn.addEventListener('click', () => pauseTrack(player));
  // attempted volume control - not very close to functional
  // volSlider.addEventListener('input', () => setVolume(player, volume));
  var submitBtn= document.getElementById('submit');
  submitBtn.addEventListener('click', searchSC);

}
// template to build a single track info - INSERT THE IMG IN AN A TAG --DONE
const trackTemplate = track => {
  if (track.artwork_url === null){track.artwork_url = './img/not-avail.jpg'}
  if (track.release === ''){track.release = 'Release Date N/A'}
  if (track.description === ''){track.description = 'Track description not available'}
  return  '<h1>' + track.title + '</h1>' +
  '<a href="'+ track.artwork_url + '"target=_blank"' +'"/>'+ '<img src="' + track.artwork_url + '"alt="' + track.artwork_url + '"/>' +'</a>'+
  '<li>' + track.description + '</li>' +
  '<li>' + track.genre + '</li>' +
  '<li>' + track.release + '</li>' +
  '<li> Artist homepage : <a href="' + track.user.permalink_url +  '"target="=blank"/>' + track.user.permalink + '</a>'
}
//
const buildTrackTemplates = tracks => {
    return tracks.map(track => trackTemplate(track));
}
/* will need to  pass in a target element and move the artistDiv var
  as it stands all tracks are psssed into a sungle div
*/
const renderTemplate = tracks  => {
  let artistDiv = document.querySelector('.artist-div');
  artistDiv.innerHTML = buildTrackTemplates(tracks);
}

/* psuedo code for an event listener on each track div
    define a variable for the div and all its children - use the developer
    tools to figure out what they are? are they just children of .artist-div
    SC.stream will need to be nested within the funcion so the stream will
    occur after the song is click on
    Should use JS event listenter or a HTML onclick?
    currently all songs in single .artist-div element
*/
/* search functionality
    build a submit element in html - remove the excess buttons(happy,rock and fun) --DONE
    SC.get will need to be nested in the search function - SO FRUSTRATING
    wrap this function around the SC.get _ WHY CAN'T I DO THIS?!!?!?!!?!?!?!?!?
    */

// const searchSC = ()  => {
//   var searchBtn = document.getElementById('search-box').value;
//   alert(searchBtn)}



SC.get('/tracks', {q: 'California'}).then(function(tracks) {
      firstTrack = tracks[0];
      renderTemplate(tracks);


  SC.stream('/tracks/' + firstTrack.id).then(function(player) {
    initEventListeners(player);

  });

});

})(ENV)
