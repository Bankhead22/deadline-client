const store = require('./../store')
const config = require('./../config')

const addSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showSubs = () => {
  return $.ajax({
    url: config.apiUrl + '/subscriptions',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateSub = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteSub = function (id) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addSub,
  showSubs,
  deleteSub,
  updateSub
}
