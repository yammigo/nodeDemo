var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/runoob";
exports.getdata = function (query) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        query(dbo, db);//操作方式
        db.close();
    });
}
