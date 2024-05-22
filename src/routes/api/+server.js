import { json } from '@sveltejs/kit'
import Game from './game'

const game = new Game()

export const GET = async({ url }) => {
    let reset = url.searchParams.get('reset')
    console.log(reset)
    if (reset === 'true') {
        game.reset()
    }

    const demons = game.getDemons()
    const win = game.playerWins()

    let response = {
        win: win,
        left: win ? null : demons[0],
        right: win ? null : demons[1]
    }

    game.next()

    return json(response)
}
