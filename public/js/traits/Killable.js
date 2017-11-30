import { Trait, Sides } from '../Entity.js'

export default class Killable extends Trait {
    constructor() {
        super('killable')

        this.removeAfter = 2
        this.deadTime = 0
        this.dead = false
    }

    kill() {
        this.queue(_ => this.dead = true )
    }

    revive() {
        this.dead = false
        this.deadTime = 0
    }

    update(entity, deltaTime, level) {
        if (this.dead) {
            this.deadTime += deltaTime
            if (this.deadTime > this.removeAfter) {
                this.queue(_ => level.entities.delete(entity))
            }
        }
    }
}