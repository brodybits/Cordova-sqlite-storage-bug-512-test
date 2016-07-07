document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady()
{
  DbSetup();
  $(document).on("click","#storyPost",function() {
    insert();
  })
}

var db;

function DbSetup()
{

  db = window.sqlitePlugin.openDatabase({name: 'testing', location: 'default'});
  db.transaction(function(tx) {
    var create_sql = 'CREATE TABLE IF NOT EXISTS story(Nid integer primary key AUTOINCREMENT, title TEXT)';
    tx.executeSql( create_sql,[], function (tx, results) {
      console.log('table created');
    });
  }, function(err) {
    navigator.notification.alert(
      err, // message
      alertDismissed, // callback
      'Database open error', // title
      'OK' // buttonName
    );
    console.log('Open database ERROR: ' + JSON.stringify(err));
  });

}

var title = 'Test title';
function alertDismissed() {}

function insert()
{
  var insert_sql = "INSERT INTO story(title) VALUES(?)";
  db.transaction(function(transaction) {
    transaction.executeSql( insert_sql, [title], function (ignored, resultSet) {
      navigator.notification.alert('INSERT success');
    }, function(ignored, error) {
      navigator.notification.alert(
        error, // message
        alertDismissed, // callback
        'Story upload error', // title
        'OK' // buttonName
      );
      console.log('Insert error: ' + error.message);
    });

  });
}
