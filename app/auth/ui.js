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
//   $('#auth-display').text('User signed in successfully')
//   $('form').trigger('reset')
//   $('#sign-in-form').hide()
//   $('#sign-up-form').hide()
//   $('#show-sign-in-btn').hide()
//   $('#new-user-btn').hide()
//   $('#sign-out-btn').show()
//   $('#new-game-btn').show()
  console.log('uccess!S')
  store.user = response.user
}

const onSignInFailure = () => {
//   $('#auth-display').text('Error while signing in')
  console.log('yoo')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
