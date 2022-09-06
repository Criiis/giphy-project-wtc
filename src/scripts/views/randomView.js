import { API_RANDOM_GIF } from '../config.js'
import {
  errorLoading,
  getJSON,
  gifLoading,
  promiseAllImage,
} from '../helpers.js'

class RandomView {
  _sectionName = 'random-gif-container'
  _pictureParent = `.${this._sectionName}__picture-container`
  _parentElement = document.querySelector(`section.${this._sectionName}`)
  // picture container -> this will be very important element as it is the one with loading screen
  _pictureParentSection = () =>
    this._parentElement.querySelector(this._pictureParent)
  // picture element
  _pictureSection = () => this._pictureParentSection().querySelector('picture')
  // all elements inside the picture
  _pictureSectionElements = () => this._pictureSection().querySelectorAll('*')
  // shuffle button
  _shuffleCTA = this._parentElement.querySelector(
    `.${this._sectionName}__shuffle-gif`
  )

  //API Fetch call for this view
  controlRandom = async function () {
    try {
      // get API data
      const data = await getJSON(API_RANDOM_GIF)
      // add gif structure into the page
      gifLoading(this._pictureParentSection(), data)
      // await and remove the loading screen when gif is loaded
      await promiseAllImage(this._pictureSectionElements(), this._pictureParent)
    } catch (err) {
      this._errorHandler(err)
    }
  }

  //handel the error for the async function
  _errorHandler(err) {
    console.error(err)
    if (err.nodeType)
      return errorLoading(err, `Image not found`, this._pictureParent)
    errorLoading(this._pictureParentSection(), err.message)
  }

  //reset section for random gif
  _resetSection() {
    this._pictureParentSection()?.classList.remove('loaded', 'error')
    this._pictureSection()?.remove()
  }

  //reload functionality for CTA
  reloadHandler() {
    this._shuffleCTA.addEventListener('click', () => {
      this._resetSection() //bind(this) wasn't working with a traditional function, not sure why, so transformed this into arrow function and this keyword is related to the parent
      this.controlRandom()
    })
  }
}

export default new RandomView()
