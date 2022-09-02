/**
 * where the magic will happen all the action will happen
 */
import { API_RANDOM_GIF } from './config.js'
import { getJSON } from './helpers.js'
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

// fetchCall(API_RANDOM_GIF)

const controlRandom = async function () {
  try {
    const data = await getJSON(API_RANDOM_GIF)
    document
      .querySelector('.random-section--picture-container')
      .insertAdjacentHTML('beforeend', gifStructure(data))

    //remove min-height
    //make background transparent
    //remove the before element

    console.log(
      document.querySelector('.random-section--picture-container picture')
    )

    Array.from(
      document.querySelector('.random-section--picture-container picture')
    ).forEach(el => {
      console.log(el)
    })

    // document.querySelector('picture').addEventListener('load', function () {
    //   console.log('loaded')

    //   document
    //     .querySelector('.random-section--picture-container')
    //     .classList.add('loaded')
    // })

    // window.addEventListener("load", event => {
    //     var image = document.querySelector('img');
    //     var isLoaded = image.complete && image.naturalHeight !== 0;
    //     alert(isLoaded);
    // });
  } catch (err) {
    console.error(err)
  }
}

controlRandom()
