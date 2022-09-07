/**
 * where the magic will happen all the action will happen
 */
import { API_TRENDING_GIF } from './config.js'
import { navController } from './controller.js'

import randomView from './views/randomView.js'
import searchView from './views/searchView.js'
import trendingView from './views/trendingView.js'

const nav = document.querySelector('.nav')

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

  //nav clicks for mobile
  nav.addEventListener('click', navController)
})()
