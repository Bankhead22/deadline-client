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

const onShowSubs = function () {
  // event.preventDefault()

  api.showSubs()
    .then(ui.onShowSubsSuccess)
    .catch(ui.onShowSubsFailure)
}

const showSubForm = function (event) {
  const id = $(event.target).data('id')
  $(`#update${id}`).toggleClass('hidden')
}

const onUpdateSub = function (event) {
  event.preventDefault()
  const subId = $('.update-btn').data('id')
  const form = event.target
  const data = getFormFields(form)

  api.updateSub(data, subId)
    .then(() => ui.onUpdateSubSuccess())
    .then(onShowSubs)
    .catch(ui.onUpdateSubFailure())
}

const onDeleteSub = function (event) {
  // event.preventDefault()

  // find id of sub
  const subId = $(event.target).data('id')

  api
    .deleteSub(subId)
    .then(ui.onDeleteSubSuccess)
    .then(onShowSubs)
    .catch(ui.onDeleteSubFailure)
}

module.exports = {
  onAddSub,
  onShowSubs,
  onDeleteSub,
  onUpdateSub,
  showSubForm
}
