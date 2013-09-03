var db; // init database variable

document.addEventListener("deviceready", onDeviceReady);

function onDeviceReady() {
  steroids.on("ready", initDatabase);
}

function initDatabase() {

  var dbPath = steroids.app.path + "/data/Chinook_Sqlite.sqlite"
  db = window.sqlitePlugin.openDatabase({name: dbPath});

}

function runQuery() {
  db.transaction(queryDB, databaseError);
}

// Query the database
function queryDB(tx) {
  tx.executeSql('SELECT * FROM ARTIST', [], gotQueryResults, databaseError);
}

// Show the results of the database query
function gotQueryResults(tx, results) {
  var len = results.rows.length;
  var result = "";
  result += ("Artist table: " + len + " rows found. \n\n");
  for (var i=0; i<len; i++){
    result += ("Name =  " + results.rows.item(i).Name + "\n");
  }
  navigator.notification.alert(result, null, "Database query successful!");
}

// Transaction error callback
function databaseError(err) {
  navigator.notification.alert("Error code: " + err.code + "; message: " + err.message, null, "Error processing SQL!");
}