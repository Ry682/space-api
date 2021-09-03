const fetch = require("node-fetch")
const baseurl = "https://www.space-api.tk"

export function password() {
    fetch(baseurl)
    .then(response => response.json())
    .then(res => {
        return res;
    })
}