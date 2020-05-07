const express = require('express');
const app = express();
const port= 3000; 

app.use('/src', express.static('src'));
app.use('/public', express.static('public'));
app.get('/', (req,res)=>{
res.send('<h1>Hello word node<h1>');
});

app.get('/translate', (req,res)=>{
    res.sendfile('public/translate.html');
    });

    app.get('/circulo', (req,res)=>{
        res.sendfile('public/circle-triangle-fan.htm');
        });

app.get('/circle', (req,res)=>{
    res.sendfile('public/circle-triangle-fan.htm');
    });

app.get('/animation', (req,res)=>{
    res.sendfile('public/color-animation.html');
    });
app.get('/rotate', (req,res)=>{
    res.sendfile('public/rotate.html');
    });
app.get('/scale', (req,res)=>{
    res.sendfile('public/scale.html');
    });
app.get('/square', (req,res)=>{
    res.sendfile('public/square-t.html');
});
app.get('/striangle', (req,res)=>{
    res.sendfile('public/square-triangle.html');
});
app.get('/tringles', (req,res)=>{
    res.sendfile('public/triangles.html');
});
app.get('/color', (req,res)=>{
    res.sendfile('public/vertexcolor.html');
});
app.get('/basic', (req,res)=>{
res.sendfile('public/basic2.html');
});

app.listen(port, console.log(`listening at http://localhost:${port}`)); 