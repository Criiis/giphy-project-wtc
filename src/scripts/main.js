/**
 * where the magic will happen all the action will happen
 */
import { API_TRENDING_GIF } from './config.js'

import randomView from './views/randomView.js'
import searchView from './views/searchView.js'
import trendingView from './views/trendingView.js'

//review and optimize this
document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault()
  const button = e.target.closest('.nav__item')
  const dataSection = button.dataset.section
  const navActivateClass = 'section--active'
  const sectionActivateClass = 'section--active'

  // const 

  Array.from(document.querySelectorAll('.nav__item')).forEach(el =>
    el.classList.remove(navActivateClass)
  )

  button.classList.add(navActivateClass)

  Array.from(document.querySelectorAll('.section')).forEach(el =>
    el.classList.remove(sectionActivateClass)
  )

  document.querySelector(`.${dataSection}`).classList.add(sectionActivateClass)
})

//init all functionality
;(function () {
  // initialize the random gif
  randomView.controlRandom()
  //add click event for "next" in random section
  randomView.reloadHandler()
  //add search functionality
  searchView.searchHandler()
  //load trending gifs
  trendingView.fetchingGifData(API_TRENDING_GIF)
})()
