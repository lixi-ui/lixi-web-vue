var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({data:"ok"})
});

router.get('/img',function(req,res,next){
  console.log(req.query)
  var picPtch = path.resolve(__dirname,`../public/images/map/${req.query.z}/${req.query.x}/${req.query.y}.png`)

  res.sendFile(picPtch, function(err){
    console.log('err', err)
  })
});

module.exports = router;
