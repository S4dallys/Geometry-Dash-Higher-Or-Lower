import Controller from './controller'

export const ssr = false;
export function load({ data }) {
    return { controller: new Controller(), variables: data }
}
