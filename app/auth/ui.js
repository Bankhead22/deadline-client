const store = require('../store.js')

const onSignUpSuccess = () => {
  $('form').trigger('reset')
}

const onSignUpFailure = () => {

}

const onSignInSuccess = (response) => {
  $('form').trigger('reset')

  $('.user-modal').removeClass('is-visible')

  $('#signout-btn, .changePw, #home-btn, #create-sub-form-btn, #find-sub-form-btn, #show-subs, #change-pw-form').show()

  $('.signin, .signup, #sign-in-form, #sign-up-form').hide()

  store.user = response.user
}

const onSignInFailure = () => {

}

const onSignOutSuccess = () => {
  $('form').trigger('reset')
  $('#signout-btn, .changePw, #create-sub-form-btn, #find-sub-form-btn, #show-subs, #home-btn, #change-pw-form'
  ).hide()

  $('.signin, .signup, #sign-in-form, #sign-up-form').show()

  $('#sub-display').html(' ')
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
