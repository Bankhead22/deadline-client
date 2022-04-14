const store = require('../store.js')

const onSignUpSuccess = () => {
//   $('#auth-display').text('User signed up successfully')
//   $('#sign-up-form').hide()
//   $('#new-user-btn').hide()
  $('form').trigger('reset')

  console.log('Mo money Mo Violence')
}

const onSignUpFailure = () => {
//   $('#auth-display').html('<p>Error while signing up</p>')
  console.log('Nope!')
}

const onSignInSuccess = (response) => {
  $('form').trigger('reset')
  console.log('uccess!S')
  $('.user-modal').removeClass('is-visible')
  $('.signout, .changePw, #change-pw-form').show()
  $('.signin, .signup, #sign-in-form, #sign-up-form').hide()
  store.user = response.user
}

const onSignInFailure = () => {
//   $('#auth-display').text('Error while signing in')
  console.log('yoo')
}

const onSignOutSuccess = () => {
  $('.signout, .changePw, #change-pw-form').hide()
  $('.signin, .signup, #sign-in-form, #sign-up-form').show()
  console.log('successful')
  store.user = null
}

const onSignOutFailure = () => {
  console.log('trying agin cheif')
}

const onChangePasswordSuccess = () => {
  $('form').trigger('reset')
  $('.user-modal').removeClass('is-visible')
}

const onChangePasswordFailure = function (error) {
  console.log(error)
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
