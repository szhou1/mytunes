// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

  // initialize: function() {
  //   $.ajax({
  //     url: 'https://api.parse.com/1/classes/songs/',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function(data) {
  //       window.songData = data.results;

  //     },
  //     error: function(error) {
  //       console.log('error', error);
  //     }

  //   });
  // }

});