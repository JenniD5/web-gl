const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');



// clear screen
const render = () =>{
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
}
//Declare shader




const vertexShader = `#version 300 es
    precision mediump float;
    in vec2 position;
    in vec3 color;
    out vec3 vColor;
    uniform mat4 modelMatrix; 
    void main()
    {
        gl_Position = modelMatrix * vec4(position, 0, 1);
        vColor = color;
    }
`;

const fragmentShader = `#version 300 es
    precision mediump float;
    out vec4 fragColor;
    in vec3 vColor;
    void main()
    {
        fragColor = vec4(vColor, 1);
    }
`;

//Compile shader

const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vs, vertexShader);
gl.shaderSource(fs, fragmentShader);
gl.compileShader(vs);
gl.compileShader(fs);

if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(vs));
}

if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(fs));
}

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error(gl.getProgramInfoLog(program));
}

gl.useProgram(program);

const triangleCoords = [
    -0.5, -0.5, 
    0.5, -0.5, 
    -0.5, 0.5, 
    0.5, 0.5
];

const vertexColor = [
    1, 0, 0, 
    1, 0, 0, 
    1, 0, 0,
    1, 0, 0
];

const axis = {
x: 0,
y: 0
}
const ArrowKeys = ()=>{
    addEventListener('keydown', e =>{
   
        switch(e.keyCode){
case 39:
    axis.x = 1;
break;
case 37:
    axis.x = -1;
    break;
case 38:
     axis.y = 1
break;
case 40: 
axis.y = -1
break;

    }
    });

    addEventListener('keyup', e =>{
        
            switch(e.keyCode){
    case 39:
        axis.x = 0;
    break;
    case 37:
        axis.x = 0;
        break;
    case 38: 
    axis.y = 0
    break;
    case 40:
         axis.y = 0
    break;
    
        }
        });

}


ArrowKeys();


const positionBuffer = gl.createBuffer();
const colorBuffer = gl.createBuffer();
const position = gl.getAttribLocation(program, 'position');
const color = gl.getAttribLocation(program, 'color');
const mMatrix = gl.getUniformLocation(program, 'modelMatrix');



const modelMatrix = mat4.create();

const moveSpeed = document.getElementById('moveSpeed');



let now = Date.now();
//animation 



const update = ()=>{

    render();

    const deltaTime = (Date.now() - now) * 0.001;    
     now = Date.now();

     mat4.translate(
        modelMatrix,
        modelMatrix,
        [deltaTime * axis.x * moveSpeed.value, deltaTime * axis.y * moveSpeed.value, 0]
        
        );


  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoords), gl.STATIC_DRAW);
   
    gl.uniformMatrix4fv(mMatrix, false, modelMatrix);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, gl.FALSE, 0, 0);

    
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColor), gl.STATIC_DRAW);
 
    gl.enableVertexAttribArray(color);
    gl.vertexAttribPointer(color, 3, gl.FLOAT, gl.FALSE, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
 //recursivo 
    requestAnimationFrame(update, 1000 / 60);
}

requestAnimationFrame(update);