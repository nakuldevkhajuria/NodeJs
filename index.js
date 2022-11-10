// const http = require('http')
const express = require('express')
const app = express();



const middleware = (req,res,next) => {
res.write('i am inside first middleware  ')

    next();
}

app.use(middleware);//this middleware will be globally declared

const middleware2 = (req,res,next) => {
    const result = 5;
if (result === 5) {
    res.write('we are insdie middleware2  ')
 
    next();
   
   
} else {
  res.send('We are having some errror to compelte the app')
}
    
}
app.get('/',
(req,res) => {
    
    res.write('We are on the Root page, and we are using global middleware');
    res.end();
})
app.get('/home',middleware2 ,
(req,res) => {
    console.log(req.body);
    res.write('homeRouteIsWorking, and we are using local middleware');
    res.end();
})
app.get('/home2',middleware2,
(req,res) => {
    console.log(req.body);
    res.write('we are at home, and we are using local middleware');
    res.end();
})
app.post('/work',
(req,res) => {
    

    // res.write(req.body);
    res.write('We are in work and we are using global middleware' );
    res.end();
})
app.get('/travel',
(req,res) => {
    
    res.write('We are traveling, and we are using global middleware');
    res.end();
})
app.get('/backHome',
(req,res) => {
    
    res.write('We are backHome and we are using global middleware');
    res.end();
})

app.listen(5000,() => {
    console.log('App is started');
})