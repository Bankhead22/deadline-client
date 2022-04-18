const store = require('../store.js')

const onSignUpSuccess = () => {
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#sign-up-form')
    .find('input[type="email"], input[type="password"]')
    .toggleClass('has-error')
    .next('span')
    .toggleClass('is-visible')
}

const onSignInSuccess = (response) => {
  $('form').trigger('reset')

  $('.user-modal').removeClass('is-visible')

  $('#signout-btn, .changePw, #home-btn, #create-sub-form-btn, #find-sub-form-btn, #show-subs, #change-pw-form').show()

  $('.signin, .signup, #sign-in-form, #sign-up-form').hide()

  store.user = response.user
  $('#sub-display').html(`
      <div class="display">
        <h2>Welcome ${store.user.email}!</h2>
        <p>To get started, click the 'Create New Sub' button to create a new subscription. All you need to do is enter the name, price per month, start and end date of your subscription, along with any additional notes to start tracking subscriptions! View all your created subscriptions with the 'My subs' button! 
        </p>
      </div>`)
}

const onSignInFailure = () => {
  $('#sign-in-form').find('input[type="email"], input[type="password"]').toggleClass('has-error').next('span').toggleClass('is-visible')
}

const onSignOutSuccess = () => {
  $('form').trigger('reset')
  $('#signout-btn, .changePw, #create-sub-form-btn, #find-sub-form-btn, #show-subs, #home-btn, #change-pw-form'
  ).hide()

  $('.signin, .signup, #sign-in-form, #sign-up-form').show()

  $('#sub-display, #home-display').html(' ')
  $('#home-display').html('<div class="display"><h2>Goodbye!</h2></div>')
  $('#create-sub-form, .update-sub-form').addClass('hidden')

  store.user = null
}

const onSignOutFailure = () => {
}

const onChangePasswordSuccess = () => {
  $('form').trigger('reset')
  $('.user-modal').removeClass('is-visible')
}

const onChangePasswordFailure = () => {
  $('#change-pw-form').find('input[type="password"]').toggleClass('has-error').next('span').toggleClass('is-visible')

  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
