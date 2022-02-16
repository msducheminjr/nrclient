import consumer from "channels/consumer"

consumer.subscriptions.create("ConcertChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  },

  added_to_cart: function() {
    return this.perform('added_to_cart');
  }
});
