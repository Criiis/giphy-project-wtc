import { API_SEARCH_GIF } from '../config.js'
import GeneralView from './viewHelpers.js'

class SearchView extends GeneralView {
  _sectionName = 'search-gif-container'
  _pictureParent = `.${this._sectionName}__picture-container`
  _parentElement = document.querySelector(`section.${this._sectionName}`)
  //search input
  _formInputSearch = this._parentElement.querySelector(
    `.${this._sectionName}__search-input`
  )
  //search button
  _formCTASearch = this._parentElement.querySelector(
    `.${this._sectionName}__search-btn`
  )
  //search results container
  _resultContainer = this._parentElement.querySelector(
    `.${this._sectionName}__results`
  )
  //get all picture parent
  _pictureContainer = () =>
    Array.from(document.querySelectorAll(this._pictureParent))

  // click for when user search for
  searchHandler = () => {
    this._formCTASearch.addEventListener('click', e => {
      e.preventDefault()
      const searchValue = this._formInputSearch
      const searchURL = `${API_SEARCH_GIF}&q=${searchValue.value}`
      this._resultContainer.innerHTML = ''
      this.fetchingGifData(searchURL)
      searchValue.value = ''
      searchValue.blur()
    })
  }
}

export default new SearchView()
