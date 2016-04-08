Books = new Mongo.Collection('Books');

TabularTables = {};

TabularTables.Books = new Tabular.Table({
  name: "Books",
  collection: Books,
  columns: [
    {data: "title", title: "Title"},
    {data: "author", title: "Author"},
    {data: "copies", title: "Copies"},
  ]
});
