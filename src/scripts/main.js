/**
 * where the magic will happen all the action will happen
 */
import { API_RANDOM_GIF } from './config.js'
import { getJSON, imageLoadChecker } from './helpers.js'
import randomView from './views/randomView.js'
import { gifStructure } from './views/viewHelpers.js'
// import data from './mock.json'

// console.log(data)
// console.log('hello world')

//Technical requirements

// You are free to implement this application in your choice of frontend language, e.g. jQuery, React, etc. the assessment is more to ascertain how you are doing in frontend so far rather than checking your ability in a certain codebase.
// For the data required to bring your application to life, please register for a free account on giphy.com, then review the documentation available here: https://developers.giphy.com/docs/api/endpoint
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


//has to be all reviewed
const controlRandom = async function () {
  try {
    // get API data
    const data = await getJSON(API_RANDOM_GIF) //TODO: @PARAM URL
    console.log(data)

    // create and insert the image element into HTML behind the loading container
    randomView
      .pictureParentSection()
      .insertAdjacentHTML('beforeend', gifStructure(data)) //TODO: @PARAM parent div of image

    // create a promise for the image to remove the loading screen only after the image is loaded
    await Promise.all(
      Array.from(randomView.pictureSectionElements()).map(async image => {
        // get response from image loader checker function
        await imageLoadChecker(image)
        // add class loaded if the promise fulfilled
        image.closest(randomView.imageParent).classList.add('loaded')
      })
    )
  } catch (err) {
    console.error(err)
    console.error(`${err}, err, dsakghjasdgasdkasgdkgkhsad`)
  }
}

;(function () {
  controlRandom() // initialize the random gif
  randomView.reloadHandler(controlRandom) //add click event for "next" in random section
})()
