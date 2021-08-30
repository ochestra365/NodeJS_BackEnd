var express = require('express')
var app = express()
var bodyParser=require('body-parser')
app.listen(3000,function(){
    console.log("start! express server on port 3000");
});
app.use(express.static('public'))//퍼블릭이란 디렉토리를 정적으로 기억하겠다.
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/main.html")
})
app.get('/main',function(req,res){
    console.log('test');
    res.sendFile(__dirname+'/public/main.html')
})

app.post('/email_post',function(req,res){
    //get : req.param('email')
    res.send("post response")
})