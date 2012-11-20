// Generated by CoffeeScript 1.3.3
(function() {
  var db, nano, nanoDb;

  nano = require('nano')('http://localhost:5984');

  nanoDb = nano.db.use('speeddev1');

  db = (function() {

    function db() {}

    db.lastId = 0;

    db.prototype.insert = function(doc, key) {
      var newId;
      console.log("Inserting...");
      doc.createdAt = new Date().toString();
      doc.type = 'dino';
      newId = key + '_' + db.lastId++;
      return nanoDb.insert(doc, newId, function(err, body, header) {
        if (err) {
          return console.log('[db.insert] ', err.message);
        } else {
          console.log('you have inserted the rabbit.');
          return console.log(body);
        }
      });
    };

    db.prototype.get = function() {
      return console.log("Getting...");
    };

    return db;

  })();

  module.exports = db;

}).call(this);
