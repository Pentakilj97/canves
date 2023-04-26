class Generation{
    
    constructor(lifeTime=100, pointsArray=[]){
        this.pointsArray=pointsArray
        this.lifeTime=lifeTime
    }


    addPoint(point){
        this.pointsArray.push(point)
    }
    isDead(){
        return this.lifeTime<=0
    }

    draw(ctx){
        this.lifeTime--
        if (!this.isDead()) {
            for (let i = 0; i < this.pointsArray.length; i++) {
                const point = this.pointsArray[i];
                point.draw(ctx)
                point.changePosition()
            
        }
    }
    }

    static generateRandome(numberOfPoints, canvasWidth,canvasHeight){
        const newGeneraion=new Generation()
        for (let i = 0; i < numberOfPoints; i++) {
            const newPoint= Point.generateRandom(canvasWidth,canvasHeight)
            newGeneraion.addPoint(newPoint)
            
        }
        return newGeneraion

    }
}