
const myCanvas = document.getElementById('my-canvas')
const ctx = myCanvas.getContext('2d')
let previoustime

let newGeneraion = Generation.generateRandome(200, myCanvas.width,myCanvas.height)
// const pointsArray=[]

// for (let i = 0; i < 10000; i++) {
//     const newPoint=Point.generateRandom(myCanvas.clientWidth,myCanvas.height)
//     newGeneraion.addPoint(newPoint)
// }
console.log(newGeneraion)

// setInterval(()=>{

//     for (let i = 0; i < pointsArray.length; i++) {
//         const point = pointsArray[i];
//         point.draw(ctx)
//         point.changePosition()
//     }
// },0.1)

function step(timestamp){
    // if (previoustime) {
    //     console.log(1000/(timestamp-previoustime))
    // } previoustime=timestamp
    // for (let i = 0; i < newGeneraion.pointsArray.length; i++) {
    //     const point = newGeneraion.pointsArray[i];
    //     point.draw(ctx)
    //     point.changePosition()
    // }
    newGeneraion.draw(ctx)
    if(newGeneraion.isDead()){
        ctx.fillStyle='rgba(0,0,0,0.1)'
        ctx.fillRect(0,0, myCanvas.width,myCanvas.height)
        newGeneraion=Generation.generateRandome(200, myCanvas.width,myCanvas.height)

    }
    window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)
// for (let i = 0; i < 100; i++) {
    // const point = {
    //     x: 300,
    //     y: 300
    // }
    // const red = Math.floor(Math.random() * 256)
    // const green = Math.floor(Math.random() * 256)
    // const blue = Math.floor(Math.random() * 256)


    // const randomColor = `rgba(${red},${green},${blue})`
    // const point=new Point(300,300, randomColor)
//     const point=Point.generateRandom(myCanvas.width, myCanvas.height)

//     setInterval(() => {
        
//         point.draw(ctx)

//         point.changePosition()

//         // const randomX = (Math.random() * 4) - 2
//         // const randomY = (Math.random() * 4) - 2
//         // ctx.fillStyle = point.color
//         // ctx.fillRect(point.x, point.y, 2, 2)
//         // point.y += randomY
//         // point.x += randomX
//     }, 0.1)
// }
