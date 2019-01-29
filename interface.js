var getdbdata = require('./dbconfig');

exports.getdata = function (args, callback) {
    getdbdata.getdata(function (dbo, db) {
        dbo.collection("site").find({}).toArray(function (err, result) { // 返回集合中所有数据
            if (err) throw err;
            callback(result);//渲染方式
            db.close();
        });
    })

}

exports.savedata = function (data, callback) {
    getdbdata.getdata(function (dbo, db) {
        dbo.collection("site").insertOne(data, function (err, res) {
            callback(err);
            db.close();
        });
    })
}