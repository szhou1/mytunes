// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td><img src = <%= artwork_url %>></td>' +
                       '<td><%= artist %></td>' + 
                       '<td><%= album %></td>' +
                       '<td><%= title %></td>' +
                       '<td><%= playCount %></td>'
                       ),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
