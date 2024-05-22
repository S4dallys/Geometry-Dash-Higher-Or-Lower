export const load = async({ fetch, url }) => {
    const data = await fetch('/api?reset=true')
    return await data.json()
}
