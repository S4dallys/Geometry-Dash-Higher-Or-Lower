import { demons } from './demons'

demons.map(d => {
    delete d.id
    delete d.legacy
    delete d.points
    delete d.two_player
    delete d.level_id
})

export default class Controller {
    constructor() {
        this.demons = shuffle([...demons])
        this.pointer = 3
    }

    getFirst() {
        let data = {
            top: this.demons[0],
            bottom: this.demons[1],
            next: this.demons[2],
        }

        return data
    }

    getNext() {
        let data = this.demons[this.pointer]

        this.pointer++

        return data
    }

    // returns true if correct
    isHarder() {
        return this.demons[this.pointer - 3].position > this.demons[this.pointer - 2].position
    }

    // returns true if correct
    isEasier() {
        return this.demons[this.pointer - 3].position < this.demons[this.pointer - 2].position
    }

    reset() {
        this.demons = shuffle(this.demons)
        this.pointer = 3

        console.log(demons)
    }
}

// https://stackoverflow.com/a/2450976
function shuffle(arr) {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }

    return arr
}
