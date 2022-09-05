import { API_SEARCH_GIF } from '../config.js'
import {
  errorLoading,
  getJSON,
  promiseAllImage,
  imageLoadChecker,
} from '../helpers.js'
import { singleGifContainer } from './viewHelpers.js'

class SearchView {
  _parentElement = document.querySelector('section.search-section')
  imageParent = '.search-section--picture-container'

  formSearch = document.querySelector('.search-section--form')
  formInputSearch = this.formSearch.querySelector('input#search')
  formCTASearch = this.formSearch.querySelector('.btn')
  searchResults = this._parentElement.querySelector('.search-section--results')

  allImageParents = () =>
    Array.from(document.querySelectorAll(this.imageParent))

  //fetch search gif api
  searchGif = async function (querySearch) {
    try {
      // get API data
      const data = await getJSON(`${API_SEARCH_GIF}&q=${querySearch}`)
      // if search didn't work it return the empty array
      if (data.length === 0) throw new Error('Could not find any results')

      // add data to page
      data.forEach(data =>
        this.searchResults.insertAdjacentHTML(
          'beforeend',
          singleGifContainer(data)
        )
      )

      // check the image is loaded or not
      this.allImageParents().forEach(async container => {
        try {
          await promiseAllImage(
            container.querySelectorAll('picture *'),
            this.imageParent
          )
        } catch (err) {
          errorLoading(err, `Image not found`, this.imageParent)
        }
      })
    } catch (err) {
      errorLoading(this.searchResults, err)
    }
  }

  // click for when user search for
  searchHandler = () => {
    this.formCTASearch.addEventListener('click', e => {
      e.preventDefault()
      const searchValue = this.formInputSearch

      this.searchResults.innerHTML = ''
      this.searchGif(searchValue.value) //filter the value
      searchValue.value = ''
    })
  }
}

export default new SearchView()
