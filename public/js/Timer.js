export default class Timer {
    constructor(deltaTime = 1/60) {
        let accumulatedTime = 0
        let lastTime = 0

        this.updateProxy = (time) => {
            accumulatedTime += (time - lastTime) / 1000
            
            while (accumulatedTime > deltaTime) {
                this.update(deltaTime)
                accumulatedTime -= deltaTime
            }
            this.enqueue()
            // setTimeout(update, 1000/240, performance.now())
    
            lastTime = time
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy)
    }

    start() {
        this.enqueue()
    }
}