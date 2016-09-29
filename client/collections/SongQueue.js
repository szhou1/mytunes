// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(params) {

    this.on('add', function(song) {
      if (this.length === 1) {
        console.log('length is one');
        this.playFirst();
      }
    });

    this.on('enqueue', function(song) {
      console.log('enqueue in SongQueue');
      this.add(song);
    });

    // this.on('change', function() {
    //   console.log('changed');
    // });

    this.on('ended', function() {
      console.log('ended in SongQueue');
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      console.log('dequeue in SongQueue');
      if (song === this.at(0)) {
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function() {
    console.log('playFirst');
    this.at(0).play();
  }

});