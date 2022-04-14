// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

const $userModal = $('.user-modal')
const $loginForm = $userModal.find('#login')
const $signupForm = $userModal.find('#signup')
// const $forgotPasswordForm = $userModal.find('#reset-password')
const $switchTab = $('.switcher')
const $loginTab = $switchTab.children('li').eq(0).children('a')
const $signUpTab = $switchTab.children('li').eq(1).children('a')
// const $forgotPasswordLink = $loginForm.find('.form-bottom-message a')
// const $backToLoginLink = $forgotPasswordForm.find(
//   '.form-bottom-message a'
// )

const $mainNav = $('.main-nav')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  // open modal
  $mainNav.on('click', function (event) {
    if ($(event.target).is($mainNav)) {
      // on mobile open the submenu
      $(this).children('ul').toggleClass('is-visible')
    } else {
      // on mobile close submenu
      $mainNav.children('ul').removeClass('is-visible')
      // show modal layer
      $userModal.addClass('is-visible')
      // show the selected form
      $(event.target).is('.signup') ? signupTabSelected() : loginTabSelected()
    }
  })

  // close modal
  $userModal.on('click', function (event) {
    if ($(event.target).is($userModal) || $(event.target).is('.close-form')) {
      $userModal.removeClass('is-visible')
    }
  })

  // switch from a tab to another
  $switchTab.on('click', function (event) {
    event.preventDefault()
    $(event.target).is($loginTab) ? loginTabSelected() : signupTabSelected()
  })

  // hide or show password
  // $('.hide-password').on('click', function () {
  //   const $this = $(this)
  //   const $passwordField = $this.prev('input')

  //   $passwordField.attr('type') == 'password'
  //     ? $passwordField.attr('type', 'text')
  //     : $passwordField.attr('type', 'password')
  //   $this.text() == 'Hide' ? $this.text('Show') : $this.text('Hide')
  //   // focus and move cursor to the end of input field
  //   $passwordField.putCursorAtEnd()
  // })

  // // show forgot-password form
  // $forgotPasswordLink.on('click', function (event) {
  //   event.preventDefault()
  //   forgot_password_selected()
  // })

  // // back to login from the forgot-password form
  // $backToLoginLink.on('click', function (event) {
  //   event.preventDefault()
  //   loginTabSelected()
  // })

  function loginTabSelected () {
    $loginForm.addClass('is-selected')
    $signupForm.removeClass('is-selected')
    // $forgotPasswordForm.removeClass('is-selected')
    $loginTab.addClass('selected')
    $signUpTab.removeClass('selected')
  }

  function signupTabSelected () {
    $loginForm.removeClass('is-selected')
    $signupForm.addClass('is-selected')
    // $forgotPasswordForm.removeClass('is-selected')
    $loginTab.removeClass('selected')
    $signUpTab.addClass('selected')
  }

  // function forgot_password_selected () {
  //   $loginForm.removeClass('is-selected')
  //   $signupForm.removeClass('is-selected')
  //   $forgotPasswordForm.addClass('is-selected')
  // }
})
