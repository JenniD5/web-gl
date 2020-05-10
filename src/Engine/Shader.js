export default class Shader{
constructor (gl, vsSource, fsSource){
return this.initShader(gl, vsSource, fsSource)

}

loadShader(gl, type, source)
{
const shader = gl.createShader(type);
const status = this.compileShader(gl, shader, source);

if(gl.getShaderParameter(shader, status))
{
this.shaderError(gl,shader);
}
return shader; 
}

compileShader(gl, shader, source)
{
gl.shaderSource(shader, source);
gl.compileShader(shader);

return gl.COMPILE_STATUS;
}

async initShader(gl, vsSource, fsSource){
    const vs= gl.VERTEX_SHADER;
    const fs = gl.FRAGMENT_SHADER;
    const vsfile= await this.getFile(vsSource);
    const fsfile= await this.getFile(vsSource);
    const vertexShader = this.loadShader(gl,vs,vsfile);
    const fragmentShader = this.loadShader(gl,fs,fsfile);
    const program = gl.createProgram();
    const status = this.linkProgram(gl,program,vertexShader,fragmentShader);
    
    

}
linkProgram(gl,program,vs,fs)
{
gl.attachShader(program, vs);
gl.attachShader(program,fs);
gl.linkProgram(program);
     
        
if(!gl.getProgramParameter(program,status )){
    this.programError(gl, program);
    }
return program;

}
programError(gl,program,vs,fs)
{
const error= gl.getProgramInfoLog(program);
alert(`Unable to initialize the Program: ${error}`);
gl.deleteProgram(program);
}

shaderError(gl, shader)
{
    const error = gl.getShaderInfoLog(shader);
    alert(`Unusuable to initializae the sahder program ${error}`);
    gl.deleteShader(shader);
}
async getFile (filepath)
{
    const file = await  fetch(filepath).then(res => res.text().then(data =>{return data}));
if(!file){
    alert(`Warning: Loading of ${filePath} Failed!`)
return file; 
}
}
}