var express = require('express')
var app = express()
var bodyParser=require('body-parser')
app.listen(3000,function(){
    console.log("start! express server on port 3000");
});
app.use(express.static('public'))//퍼블릭이란 디렉토리를 정적으로 기억하겠다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))//외우는 것이다. --> 클라이언트랑 서버랑 데이터를 주고 받을 때 인코딩 데이터를 이용한다. 다른 특수문자는 치환해서 보낸다. 그걸 인코딩이라 한다.
app.set('view engine','ejs')//이 문자열을 찾아서 view engine을 사용한다.
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/main.html")
})
app.get('/main',function(req,res){
    console.log('test');
    res.sendFile(__dirname+'/public/main.html')
})

app.post('/email_post',function(req,res){
    //get : req.param('email')
    console.log(req.body.email)
    //res.send("<h1>welcome "+req.body.email+"</h1>")
    res.render('email.ejs',{'email' : req.body.email})//이메일 키 값에 해당 value를 집어 넣어줘라. 그러면 치환을 해서 클라이언트에 응답을 해준다.
})

app.post('/ajax_send_email',function(req,res){
    console.log(req.body.email);
    var responseData={'result': 'OK','email':req.body.email};
    res.json(responseData)
})
app.post('/ajax_send_email',function(req,res){
    console.log(req.body.email);
    var responseData={'result':'ok','email':req.body.email}
    res.json(responseData)
});