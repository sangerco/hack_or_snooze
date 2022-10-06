"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  console.log('clicked nav all stories');
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

function navSubmitStoryClick(e) {
  console.debug('navSubmitStoryClick', e);
  console.log('clicked submit story');
  hidePageComponents();
  $allStoriesList.show();
  $storySubmitForm.show();
}

$navStorySubmit.on('click', navSubmitStoryClick);

function navFavoritesClick(e) {
  console.debug('navFavoritesClick', e);
  console.log('clicked favorites');
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on('click', '#fav-stories-list', navFavoritesClick);

function navMyStories(e) {
  console.debug('navMyStories', e);
  console.log('clicked my stories');
  hidePageComponents();
  putUserStoriesOnPage();
  $myStories.show();
}

$body.on('click', '#my-stories', navMyStories);


/** Show login/signup on click on "login" */

function navLoginClick(e) {
  console.debug("navLoginClick", e);
  console.log('clicked login');
  hidePageComponents();  
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

function navProfileClick(e) {
  console.debug('navProfileClick', e);
  console.log('clicked profile');
  hidePageComponents();
  $navUserProfile.show();
}

$navUserProfile.on('click', navProfileClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
