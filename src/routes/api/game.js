import { demons } from './demons.server'

export default class Game {
    constructor() {
        this.pointer = 0
        this.demons = this.reset(demons)
    }

    getDemons() {
        return [demons[this.pointer], demons[this.pointer + 1]]
    }

    next() {
        this.pointer++
    }

    playerWins() {
        return this.pointer == demons.length
    }

    // https://stackoverflow.com/a/2450976
    reset() {
        this.pointer = 0
        let currentIndex = demons.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [demons[currentIndex], demons[randomIndex]] = [
                demons[randomIndex], demons[currentIndex]];
        }
    }
}
