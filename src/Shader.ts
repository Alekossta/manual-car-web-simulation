function createShader(gl : WebGLRenderingContext, type : number, source : string) : WebGLShader | null
{
    let shader = gl.createShader(type);
    if(shader)
    {
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if(success)
        {
            return shader;
        }
        else
        {
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        }
    }

    return null;
}

function createShaderProgram(gl : WebGLRenderingContext, vertexShader : WebGLShader, fragmentShader : WebGLShader)
: WebGLProgram | null
{
    let program = gl.createProgram();
    if(program)
    {
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        let success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if(success)
        {
            return program;
        }
        else
        {
            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        }
    }

    return null;
}

export {createShader, createShaderProgram};