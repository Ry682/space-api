const fetch = require("node-fetch")
const baseurl = "https://www.space-api.tk"

function password() {
    fetch(baseurl)
    .then(response => response.json())
    .then(res => {
        return res.password;
    })
}

module.exports = {
    password: password,
};