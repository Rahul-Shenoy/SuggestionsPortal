export function Query(query) {
    return fetch(`http://dev.tsf.sda.amat.com:5000/?q=${query}`).then(data => data.json())
}
