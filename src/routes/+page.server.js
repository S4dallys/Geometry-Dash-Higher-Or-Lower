export function load({ cookies }) {
    const highscore = cookies.get('highscore') || 0
    const highscore150 = cookies.get('highscore150') || 0
    const isTop150 = cookies.get('isTop150') || false

    return {
        highscore, highscore150, isTop150
    }
}
