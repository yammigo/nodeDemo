var express = require('express');
var router = express.Router();
var interface = require('./interface.js');
//首页
router.get('/', function (req, res) {
    interface.getdata('', function (data) {
        res.render('index.html', { list: data });
    })

})

router.post('/postform/', function (req, res) {
    var myobj = req.body;
    myobj.date = new Date();
    interface.savedata(myobj, function (err) {
        if (err) {
            throw err
        }
        res.redirect('/');

    })


})

module.exports = router