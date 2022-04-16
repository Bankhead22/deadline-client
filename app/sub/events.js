const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onAddSub = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api
    .addSub(data)
    .then(ui.onAddSubSuccess)
    .catch(ui.onAddSubFailure)
}

const onShowSubs = function (event) {
  event.preventDefault()

  api.showSubs()
    .then(ui.onShowSubsSuccess)
    .catch(ui.onShowSubsFailure)
}

const onUpdateSub = function (event) {
  event.preventDefault()
  const subId = $('.update-btn').data('id')
  const form = event.target
  const data = getFormFields(form)

  api.updateSub(data, subId)
    .then(() => ui.onUpdateSubSuccess())
    .catch(ui.onUpdateSubFailure())
}

const onDeleteSub = function (event) {
  event.preventDefault()

  // find id of sub
  const subId = $('.delete-btn').data('id')

  // api
  //   .deleteSub(subId)
  //   .then(() => {
  //     api.showSubs()
  //       .then(ui.onShowSubsSuccess)
  //       .catch(ui.onShowSubsFailure)
  //   })
  //   .catch(ui.onDeleteSubFailure)
  // api.deleteSub(subId)
  // .then(ui.onShowSubsSuccess)
  // .then(onShowSubs())
  // .catch(ui.onDeleteSubFailure)

  api
		.deleteSub(subId)
		.then(ui.onShowSubsSuccess)
		.then(onShowSubs(event))
		.catch(ui.onDeleteSubFailure)
  
}

module.exports = {
  onAddSub,
  onShowSubs,
  onDeleteSub,
  onUpdateSub
}
