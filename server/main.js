Meteor.startup(function() {
  Books.remove({});
  Books.insert({
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    copies: 3
  });
});
