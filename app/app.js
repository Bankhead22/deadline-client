// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const subEvents = require('./sub/events.js')


const $mainNav = $('.main-nav')
const $userModal = $('.user-modal')

const $signinForm = $userModal.find('#signin')
const $signupForm = $userModal.find('#signup')
const $changePwForm = $userModal.find('#changePw')

const $switchTab = $('.switcher')
const $signinTab = $switchTab.children('li').eq(0).children('a')
const $signupTab = $switchTab.children('li').eq(1).children('a')
const $changePwTab = $switchTab.children('li').eq(2).children('a')



$(() => {
  // Auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#signout-btn').on('click', authEvents.onSignOut)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)

  // Sub events
  $('#create-sub-form').on('submit', subEvents.onAddSub)
  $('#show-subs').on('click', subEvents.onShowSubs)
  $('#delete-sub').on('submit', subEvents.onDeleteSub)
  // $('.update-sub-form').on('submit', subEvents.onUpdateSub)

  $('#sub-display').on('click', '.delete-btn', subEvents.onDeleteSub)

  // $('#sub-display').on('submit', '.update-sub-form', () => {
  //   subEvents.onUpdateSub()
  // })

  $('#sub-display').on('click', '.update-btn', () => {
    $('.update-sub-form').toggleClass('hidden')
  })

  $('#create-sub-form-btn').on('click', () => {
    $('#create-sub-form').toggleClass('hidden')
  })

  // $('#find-sub-form-btn').on('click', () => {
  //   $('#find-sub-form').toggleClass('hidden')
  // })

  // // Nav events


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
    $signinForm.removeClass('is-selected')
    $signupForm.removeClass('is-selected')
  }
})
