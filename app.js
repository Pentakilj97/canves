console.log("io uomo pene grande")

const myCanvas= document.getElementById('my-canvas')

const ctx=myCanvas.getContext('2d')

for (let i = 0; i < 100; i++) {
    
    const originX = Math.random()*600;
    const originY = Math.random()*600;
    const width = Math.random()*100;
    const heigth = Math.random()*100;

    ctx.fillRect(originX,originY,width,heigth )
    
}