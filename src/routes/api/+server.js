import { json } from '@sveltejs/kit'
import Game from './game'

const game = new Game()

export const GET = async({ url }) => {
    let reset = url.searchParams.get('reset')

    if (reset === 'true') {
        game.reset()
    }

    const demons = game.getDemons()

    let response = {
        left: demons[0],
        right: demons[1]
    }

    game.next()

    return json(response)
}
