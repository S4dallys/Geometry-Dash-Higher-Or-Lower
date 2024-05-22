export const load = async({ fetch, url }) => {
    const data = await fetch('/api')
    return await data.json()
}
