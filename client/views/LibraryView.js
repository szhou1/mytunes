// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('ended', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('rendered library');
    this.$el.children().detach();

    this.$el.html('<th>Album Art</th><th>Artist</th><th>Album</th><th>Title</th><th>Play Count</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});


  // header: $('<th>Album Art</th><th>Artist</th><th>Album</th><th>Title</th>'),
