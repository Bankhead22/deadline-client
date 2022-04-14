// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const subEvents = require('./sub/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

const $mainNav = $('.main-nav')
const $userModal = $('.user-modal')
const $signinForm = $userModal.find('#signin')
const $signupForm = $userModal.find('#signup')
const $changePwForm = $userModal.find('#changePw')
// const $forgotPasswordForm = $userModal.find('#reset-password')
const $switchTab = $('.switcher')
const $signinTab = $switchTab.children('li').eq(0).children('a')
const $signupTab = $switchTab.children('li').eq(1).children('a')
const $changePwTab = $switchTab.children('li').eq(2).children('a')
// const $forgotPasswordLink = $signinForm.find('.form-bottom-message a')
// const $backToLoginLink = $forgotPasswordForm.find(
//   '.form-bottom-message a'
// )

$(() => {
  // Auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('.signout').on('click', authEvents.onSignOut)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)

  // Sub events
  $('#create-new-sub').on('submit', subEvents.onCreateSub)

  // open modal
  $('.signin, .signup, .changePw').on('click', function (event) {
    if ($(event.target).is($mainNav)) {
      // on mobile open the submenu
      $(this).children('ul').toggleClass('is-visible')
    } else {
      // on mobile close submenu
      $mainNav.children('ul').removeClass('is-visible')
      // show modal layer
      $userModal.addClass('is-visible')
      // show the selected form
      $(event.target).is('.signup') ? signupTabSelected() : signinTabSelected()
      if ($(event.target).is('.changePw')) {
        $changePwTab.show()
        $signupTab.hide()
        $signinTab.hide()
        changePwTabSelected()
      }
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
    if ($(event.target).is($signinTab)) {
      signinTabSelected()
    } if ($(event.target).is($signupTab)) {
      signupTabSelected()
    } if ($(event.target).is($changePwTab)) {
      changePwTabSelected()
    }
  })

  function signinTabSelected () {
    $signinForm.addClass('is-selected')
    $signupForm.removeClass('is-selected')
    $changePwForm.removeClass('is-selected')
    $signinTab.addClass('selected')
    $signupTab.removeClass('selected')
    $changePwTab.hide()
    $signupTab.show()
    $signinTab.show()
  }

  function signupTabSelected () {
    $signupForm.addClass('is-selected')
    $signinForm.removeClass('is-selected')
    $changePwForm.removeClass('is-selected')
    $signupTab.addClass('selected')
    $signinTab.removeClass('selected')
    $changePwTab.hide()
    $signupTab.show()
    $signinTab.show()
  }

  function changePwTabSelected () {
    $changePwForm.addClass('is-selected')
    $changePwTab.addClass('selected')
  }
})
