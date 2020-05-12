const express = require('express');
const app = express();
const port= 3000; 
const port = process.env.PORT || 3000

app.use('/src', express.static('src'));
app.use('/public', express.static('public'));
app.use('/shaders', express.static('shaders'));
app.use('/images', express.static('images'));

app.get('/', (req,res)=>{
res.send('<h1>Hello word node<h1>');
});

app.get('/translate', (req,res)=>{
    res.sendFile(`${__dirname}/public/translate.html`);
    });
app.get('/texture', (req,res)=>{
 res.sendFile(`${__dirname}/public/textureapp.html`);
 });
    


app.get('/circle', (req,res)=>{
    res.sendFile(`${__dirname}/public/circle-triangle-fan.html`);
    });

app.get('/animation', (req,res)=>{
    res.sendFile(`${__dirname}/public/color-animation.html`);
    });
app.get('/rotate', (req,res)=>{
    res.sendFile(`${__dirname}/public/rotate.html`);
    });
app.get('/scale', (req, res)=>{
    res.sendFile(`${__dirname}/public/scale.html`);
    });
app.get('/square', (req,res)=>{
    res.sendFile(`${__dirname}/public/square-t.html`);
});
app.get('/striangle', (req,res)=>{
    res.sendFile(`${__dirname}/public/square-triangle.html`);
});
app.get('/tringles', (req,res)=>{
    res.sendFile(`${__dirname}/public/triangles.htm`);
});
app.get('/color', (req,res)=>{
    res.sendFile(`${__dirname}/public/vertexcolor.htm`);
});
app.get('/basic', (req,res)=>{
res.sendFile(`${__dirname}/public/basic2.htm`);
});
app.get('/matriz', (req,res)=>{
res.sendFile(`${__dirname}/public/ModelMatrix.html`);
});
app.get('/external', (req,res)=>{
    res.sendFile(`${__dirname}/public/external1.html`);
    });
app.get('/textureapp', (req,res)=>{
 res.sendFile(`${__dirname}/public/textureapp.html`);
 });
 app.get('/spriteanim', (req, res)=>{
    res.sendFile(`${__dirname}/public/spritesheetapp.htm`);
});
app.get('/index', (req,res)=>{
 res.sendFile(`${__dirname}/index.html`);
});
    

app.listen(port, console.log(`listening at http://localhost:${port}`)); 