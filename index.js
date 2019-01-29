var express = require('express');
var template = require('art-template');
var fs = require('fs');
var app = express();
var router = require('./router.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/runoob";
//引入post请求
var bodyParser = require('body-parser');
//配置静态资源目录
app.use('/public/', express.static('./public'));
//配置模板
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//载入路由模块
app.use(router);

// app.get('/', function (req, res) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("runoob");
//         dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
//             if (err) throw err;
//             res.render('index.html', { list:result});
//             db.close();
//         });
//     });
// })

// app.post('/postform/', function (req, res) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("runoob");
//         var myobj = req.body;
//         myobj.date=new Date();
//         dbo.collection("site").insertOne(myobj, function (err, res) {
//             if (err) throw err;
//             console.log("文档插入成功");
//             db.close();
//         });
//     });
//     res.redirect('/');
// })

app.listen('3000',function () {
    console.log('server retuning...');
})