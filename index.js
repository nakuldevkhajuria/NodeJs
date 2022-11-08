const express = require('express')
const app = express(); 

app.get('/api/main' ,(req,res) => 
{
    res.send(`<pre>
    <h2>Question:What is expressjs and how it is better?</h2>
    <h3>js: Express is a small framework that sits on top of Node. js's web server functionality to simplify its APIs and add helpful new features.
    It makes it easier to organize your application's functionality with middle ware and routing.
    Express is a node js web application framework that provides broad features for building web and mobile applications. 
    It is used to build a single page, multipage, and hybrid web application.
    It's a layer built on the top of the Node js that helps manage servers and routes.
    Express is much faster than Django.
    Being a minimalistic framework, Express is easy to install, set up, and has a steep learning curve. 
    This characteristic makes it suitable for beginners with a basic understanding of backend development.
    More features than Node.js.
    Controllers are provided.
    Routing is provided.
    Uses middleware for the arrangement of functions systematically server-side.	
    </h3></pre>`)
})
app.listen(4000,() => 
{
    console.log('server is started');
    console.log('server is started');
})
