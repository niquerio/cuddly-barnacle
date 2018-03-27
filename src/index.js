import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';
import since_robin_hood from './since_robin_hood';
import _ from 'lodash'
var ac = new AudioContext || new webkitAudioContext;

var Player;
// Initialize player and register event handler
//var piano_promise = Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano')
//var marimba_promise = Soundfont.instrument(new AudioContext(), 'marimba')
//var guitar_promise = Soundfont.instrument(new AudioContext(), 'acoustic_guitar_nylon')
//Promise.all([piano_promise,marimba_promise,guitar_promise]).then(function(values){
//  var piano = values[0]
//  var marimba = values[1]
//  var guitar = values[2]
//  Player = new MidiPlayer.Player(function(event) {
//		if (event.name == 'Note on'){ 
//      switch(event.track){
//        case 2:
//			    //marimba.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
//          break;
//        case 3:
//			    //piano.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
//          break;
//        default:
//			    guitar.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
//      }
//    }
//  });
//});
Player = new MidiPlayer.Player();
Player.loadDataUri(since_robin_hood);
var has_note_on = function(track_events){
  for(var i = 0; i< track_events.length; i++){
    if(track_events[i].name == 'Note on'){
      return track_events[i].track 
    }
  }
  return false
}
var events = Player.getEvents();
var active_tracks = _.compact(_.map(events, has_note_on))
console.log(active_tracks)
