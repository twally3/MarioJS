import KeyboardState from './KeyboardState.js'

export function setupKeyboard(entity) {
    const input = new KeyboardState()

    input.addMapping("Space", keyState => {
        if (keyState) {
            entity.jump.start()
        } else {
            entity.jump.cancel()
        }
    })

    input.addMapping("ArrowRight", keyState => {
        entity.go.dir = keyState
    })

    input.addMapping("ArrowLeft", keyState => {
        entity.go.dir = -keyState
    })

    return input
}

// ;['mousedown', 'mousemove'].forEach(eventName => 
//     canvas.addEventListener(eventName, event => {
//         if (event.buttons === 1) {
//             mario.vel.set(0, 0)
//             mario.pos.set(event.offsetX, event.offsetY)
//         }
//     })
// )