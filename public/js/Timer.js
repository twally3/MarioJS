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
    
            lastTime = time
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy)
        // setTimeout(this.updateProxy, 1000/60, performance.now())
    }

    start() {
        this.enqueue()
    }
}