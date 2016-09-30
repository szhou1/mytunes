// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(params) {

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('enqueue', function(song) {
      this.add(song);
    });

    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if (song === this.at(0)) {
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});