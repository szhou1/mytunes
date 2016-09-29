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

    // this.on('change', function() {
    //   console.log('changed');
    // });

    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', this.shift);
  },

  playFirst: function() {
    // console.log('playFirst');
    this.at(0).play();
  }

});