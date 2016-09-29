// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('play');
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('enqueue in songModel');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('dequeue in songModel');
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log('ended in songModel');
    this.trigger('ended', this);
  }

});
