const fetch = require("node-fetch")
const baseurl = "https://www.space-api.tk"

function password() {
    fetch(baseurl + '/password')
    .then(response => {
        return response;
    })
}

module.exports = {
    password: password,
};