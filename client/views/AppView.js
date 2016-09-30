// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {

    this.$searchBar = $('<input>').attr('type', 'text')
                  .attr('class', 'searchBar')
                  .attr('placeholder', 'Search by Artist/Album/Song')
                  .on('keyup', function() {
                    var input = $('.searchBar').val();
                    this.libraryView.render(input);
                  }.bind(this));

    // $searchButton = $('<button>').attr('class', 'searchButton').text('Search')
    //                 .click(function() {
    //                   var input = $('.searchBar').val();
    //                 });

    // this.playerView.$el = $('<div class="player"/>').append(this.playerView.$el)
    //                       .append($searchBar);
    this.libraryView.$el = $('<div class="library"/>').append(this.libraryView.$el);
    this.songQueueView.$el = $('<div class="queue"/>').append(this.songQueueView.$el);

    return this.$el.html([
      this.playerView.$el,
      this.$searchBar,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
