import { API_SEARCH_GIF } from '../config.js'
import { errorLoading, getJSON, promiseAllImage } from '../helpers.js'
import { singleGifContainer } from './viewHelpers.js'

class SearchView {
  _sectionName = 'search-gif-container'
  _imageParent = `.${this._sectionName}__picture-container`
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
  _searchResults = this._parentElement.querySelector(
    `.${this._sectionName}__results`
  )

  _allImageParents = () =>
    Array.from(document.querySelectorAll(this._imageParent))

  //fetch search gif api
  searchGif = async function (querySearch) {
    try {
      // get API data
      const data = await getJSON(`${API_SEARCH_GIF}&q=${querySearch}`)
      // if search didn't work it return the empty array
      if (data.length === 0) throw new Error('Could not find any results')

      // add data to page
      data.forEach(data =>
        this._searchResults.insertAdjacentHTML(
          'beforeend',
          singleGifContainer(data)
        )
      )

      // check the image is loaded or not
      this._allImageParents().forEach(async container => {
        try {
          await promiseAllImage(
            container.querySelectorAll('picture *'),
            this._imageParent
          )
        } catch (err) {
          console.error(err)
          errorLoading(err, `Image not found`, this._imageParent)
        }
      })
    } catch (err) {
      console.error(err)
      errorLoading(this._searchResults, err)
    }
  }

  // click for when user search for
  searchHandler = () => {
    this._formCTASearch.addEventListener('click', e => {
      e.preventDefault()
      const searchValue = this._formInputSearch
      this._searchResults.innerHTML = ''

      this.searchGif(searchValue.value) //filter the value
      searchValue.value = ''
    })
  }
}

export default new SearchView()
