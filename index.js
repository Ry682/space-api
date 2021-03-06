const fetch = require("node-fetch")
const baseurl = "https://www.space-api.tk/"
async function request(endpoint, input='') {
  const res = `${baseurl}${endpoint}?${input}`
  return res;
}

module.exports.password = async function() {
  const res = await fetch(`${baseurl}password`)
  const json = await res.json()
  return json.password;
}