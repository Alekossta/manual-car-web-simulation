import { createShader, createShaderProgram } from "./Shader";
import defaultVertex from "./shaders/vertex/defaultVertex";
import defaultFragment from "./shaders/fragment/defaultFragment";

const positions = [
    0,0,
    0,0.5,
    0.7,0
];

let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let gl = canvas.getContext("webgl");
if(!gl)
{
    alert("No webgl available");
}
else
{
    let vertexShader = createShader(gl, gl.VERTEX_SHADER, defaultVertex);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, defaultFragment);
    if(vertexShader && fragmentShader)
    {
        let program = createShaderProgram(gl, vertexShader, fragmentShader);

        if(program)
        {
            let positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
            gl.viewport(0,0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0,0,0,0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
    
            const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
    }
}

