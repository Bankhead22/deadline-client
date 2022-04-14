const store = require('../store.js')
const config = require('../config.js')

const signUp = (data) => {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

module.exports = {
  signUp,
  signIn

}
