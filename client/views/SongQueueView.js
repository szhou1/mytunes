// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('pop', this.render, this);
    this.collection.on('ended', this.render, this);
    this.collection.on('dequeue', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Album Art</th><th>Artist</th><th>Album</th><th>Title</th><th>Play Count</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }
});
