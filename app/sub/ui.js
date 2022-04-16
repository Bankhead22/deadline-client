'use strict'

const store = require('./../store')


const onAddSubSuccess = function (response) {
  const newSub = response.subscription
  store.subscription = newSub
  $('#create-sub-form').addClass('hidden')

  $('form').trigger('reset')
}

const onAddSubFailure = function () {
  $('form').trigger('reset')
}

const onShowSubsSuccess = function (response) {
  const subs = response.subscriptions
  const owned = store.user._id
  const mySubs = subs.filter(sub => sub.owner === owned)

  let allSubsHTML = ''

  mySubs.forEach(sub => {
    const singleSubHTML = `
    <div class="demo">
      <p>Name: ${sub.name}</p>
      <p>Start Date: ${sub.start}</p>
      <p>End Date: ${sub.end}</p>
      <p>Price: $${sub.price}/month</p>
      <p>Notes: ${sub.notes}</p>
      <p>ID: ${sub._id}</p>
      <button class="delete-btn" data-id=${sub._id}>delete</button>
      <button class="update-btn" data-id=${sub._id}>update</button>
   </div>  <div class="centered content">
        <form class="update-sub-form form hidden">

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
          <input class="full-width has-padding" type="submit" name="submit" value="Create subscription!">
        </p>
        </form>
</div> `
    allSubsHTML += singleSubHTML
  })
  $('#sub-display').html(`These are your subs:${allSubsHTML}`)

  $('form').trigger('reset')
}

const onShowSubsFailure = function () {
  $('#sub-display').hide()
  $('form').trigger('reset')
}

const onUpdateSubSuccess = function (response) {
  $('form').trigger('reset')
}

const onUpdateSubFailure = function () {
  $('form').trigger('reset')
}

const onDeleteSubSuccess = function (response) {

 $('form').trigger('reset')
 
}

const onDeleteSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
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
