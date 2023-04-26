console.log("ciao")

const myCanvas= document.getElementById('my-canvas')

const ctx=myCanvas.getContext('2d')

for (let i = 0; i < 100; i++) {
    
    const originX = Math.random()*600;
    const originY = Math.random()*600;
    const width = Math.random()*120;
    const heigth = Math.random()*120;
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    const alpha=Math.random();

    ctx.fillStyle=`rgba(${red},${green},${blue},${alpha})`


    ctx.fillRect(originX,originY,width,heigth )
    
}
