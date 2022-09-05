/**
 * where the magic will happen all the action will happen
 */
import { API_SEARCH_GIF } from './config.js'
import {
  errorLoading,
  getJSON,
  gifLoading,
  imageLoadChecker,
} from './helpers.js'
import randomView from './views/randomView.js'
import { gifStructure } from './views/viewHelpers.js'
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


//for search gif
const searchRandom = async function (querySearch) {
  try {
    // get API data
    const data = await getJSON(`${API_SEARCH_GIF}&q=${querySearch}`)
    console.log(data)
    if (data.length === 0)
      throw new Error('Could not find any results, try again.')

    data.forEach(
      ({ title, images }) =>
        document.querySelector('.search-section--results').insertAdjacentHTML(
          'beforeend',
          `
          <div class="search-section--picture-container">
        <picture class="">
          <source type="image/webp" srcset="${images.preview_webp.url}" />
          <img src="${images.preview_gif.url}" alt="${title}" loading="lazy" />
        </picture>
        </div>
        `
        ) //getting the smallest image possible instead of the big ones
    )

    for (
      let i = 0;
      i <
      document.querySelectorAll('.search-section--picture-container').length;
      i++
    ) {
      const container = document.querySelectorAll(
        '.search-section--picture-container'
      )[i]
      console.log(container)
      // console.log(container.querySelectorAll('picture *'))

      Promise.all(
        Array.from(container.querySelectorAll('picture *')).map(async image => {
          // get response from image loader checker function
          await imageLoadChecker(image)
          // add class loaded if the promise fulfilled
          image
            .closest('.search-section--picture-container')
            .classList.add('loaded')
        })
      )
    }
  } catch (err) {
    console.error(err)
  }
}


;(function () {
  randomView.controlRandom() // initialize the random gif
  randomView.reloadHandler() //add click event for "next" in random section

  //add search functionality
  document
    .querySelector('.search-section .search-section--form .btn')
    .addEventListener('click', function (e) {
      e.preventDefault()
      const searchValue = document.querySelector(
        '.search-section--form input#search'
      )

      document.querySelector('.search-section--results').innerHTML = ''
      searchRandom(searchValue.value)
      console.log(searchValue)
      searchValue.value = ''
    })
})()
