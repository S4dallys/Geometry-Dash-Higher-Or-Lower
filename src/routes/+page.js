import Controller from './controller'

export const ssr = false;
export function load()  {
    return { controller: new Controller() }
}
