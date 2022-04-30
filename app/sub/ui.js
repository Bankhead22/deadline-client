'use strict'

const store = require('./../store')

const onAddSubSuccess = function (response) {
  const newSub = response.subscription
  store.subscription = newSub
  $('#create-sub-form').addClass('hidden')

  $('form').trigger('reset')
  $('#sub-display').html('<h3>New subscription created! View by clicking \'My Subs\' button.</h3>'
  )
}

const onAddSubFailure = function () {
  $('#sub-display').html(
    '<h3>Something went wrong! Make sure that you filled all fields out correctly.</h3>'
  )
  $('form').trigger('reset')
}

const onShowSubsSuccess = function (response) {
  const subs = response.subscriptions
  const owned = store.user._id
  const mySubs = subs.filter(sub => sub.owner === owned)

  let allSubsHTML = ''

  mySubs.forEach(sub => {
    const singleSubHTML = `
  <div>
    <p>Name: ${sub.name}</p>
    <p>Start Date: ${sub.start}</p>
    <p>End Date: ${sub.end}</p>
    <p>Price: $${sub.price}/month</p>
    <p>Notes: ${sub.notes}</p>
    <p>ID: ${sub._id}</p>
    
    <div class="centered-content">
    <button class="button delete-btn" data-id=${sub._id}>delete</button>
    <button class="button update-btn" data-id=${sub._id}>update</button>
      <form id="update${sub._id}" data-id=${sub._id} class="update-sub-form form hidden">
        <p class="fieldset">
          <legend>Update subscription!</legend>
          <input type="text" class="full-width has-padding has-border" name="subscription[name]"
            placeholder="Name of subscription">
        </p>

        <p class="fieldset">
          <input type="text" class="full-width has-padding has-border" name="subscription[price]" placeholder="price/month">
        </p>

        <p class="fieldset">
          <input type="date" class="inline  has-padding has-border" name="subscription[start]">
          <input type="date" class="has-padding has-border" name="subscription[end]">
        </p>

        <p class="fieldset">
          <input class="full-width has-padding has-border" name="subscription[notes]" type="text"
            placeholder="comments">
        </p>

        <p class="fieldset">
          <input class="full-width has-padding" type="submit" name="submit" value="Update subscription!">
        </p>
      </form>
  </div>
</div>`

    allSubsHTML += singleSubHTML
  })

  $('#sub-display').html(`<legend>These are your subs:</legend>${allSubsHTML}`)

  $('form').trigger('reset')
}

const onShowSubsFailure = function () {
  $('#sub-display').html('<h3> Error while retrieving subscriptions </h3>')
  $('form').trigger('reset')
}

const onUpdateSubSuccess = function () {
  $('form').trigger('reset')
}

const onUpdateSubFailure = function () {
  $('form').trigger('reset')
}

const onDeleteSubSuccess = function () {
  $('#home-display').html('<h3>Deleted!</h3>')
  $('form').trigger('reset')
}

const onDeleteSubFailure = function (error) {
  $('#sub-display').html('There is an error occurs ', error)
  $('form').trigger('reset')
}
module.exports = {
  onAddSubSuccess,
  onAddSubFailure,
  onShowSubsSuccess,
  onShowSubsFailure,
  onUpdateSubSuccess,
  onUpdateSubFailure,
  onDeleteSubSuccess,
  onDeleteSubFailure
}
