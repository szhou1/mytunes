// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('ended', this.render, this);
  },

  render: function(input) {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    if (input && input.length) {
      //filter the collection
      var songs = _.filter(this.collection.models, function(song) {
        return song.attributes.title.toUpperCase().indexOf(input.toUpperCase()) > -1 ||
               song.attributes.album.toUpperCase().indexOf(input.toUpperCase()) > -1 ||
               song.attributes.artist.toUpperCase().indexOf(input.toUpperCase()) > -1;
      });
    } else {
      songs = this.collection;
    }

    this.$el.children().detach();

    this.$el.html('<th>Album Art</th><th>Artist</th><th>Album</th><th>Title</th><th>Play Count</th>').append(
      songs.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
