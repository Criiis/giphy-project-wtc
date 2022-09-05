/**
 * where the magic will happen all the action will happen
 */
import { API_SEARCH_GIF } from './config.js'
import {
  errorLoading,
  getJSON,
  gifLoading,
  imageLoadChecker,
  promiseAllImage,
} from './helpers.js'
import randomView from './views/randomView.js'
import searchView from './views/searchView.js'
import { gifStructure, singleGifContainer } from './views/viewHelpers.js'
// import data from './mock.json'

//Technical requirements

// You are free to implement this application in your choice of frontend language, e.g. jQuery, React, etc. the assessment is more to ascertain how you are doing in frontend so far rather than checking your ability in a certain codebase.

// Please use your CSS knowledge to present the application nicely and bring it to life, but we’re not looking for a professional design here, just a user engaging and friendly experience (not an unstyled application). Please use some colour!

// Delivery requirements

// Once you have completed your mini project and you are happy for it to be reviewed, please ensure you include a readme file (if any steps required to run it) and commit the application to your GitHub – add the link to the task on the board for review. Alternative you could also ZIP up the package and attach it to the task on the board if GitHub isn’t an option for you.
// You should allocate 3 days to this task.

// Acceptance Criteria

// HTML is valid W3C standard
// CSS class names use BEM
// The CSS is mobile first and responsive
// There is validation for a blank search
// Loading time is considered
// Error handling is considered
// Read me file on steps to run
// Steps required to run the project locally
;(function () {
  randomView.controlRandom() // initialize the random gif
  randomView.reloadHandler() //add click event for "next" in random section

  //add search functionality
  searchView.searchHandler()
})()
