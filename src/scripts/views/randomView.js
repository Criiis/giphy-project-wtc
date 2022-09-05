import { API_RANDOM_GIF } from '../config.js'
import {
  errorLoading,
  getJSON,
  gifLoading,
  imageLoadChecker,
} from '../helpers.js'

class RandomView {
  _parentElement = document.querySelector('section.random-section')
  imageParent = '.random-section--picture-container'

  // picture container -> this will be very important element as it is the one with loading screen
  pictureParentSection = () =>
    this._parentElement.querySelector(this.imageParent)

  // picture element
  pictureSection = () => this.pictureParentSection().querySelector('picture')

  // all elements inside the picture
  pictureSectionElements = () => this.pictureSection().querySelectorAll('*')

  // shuffle button
  _shuffleCTA = this._parentElement.querySelector(
    '.random-section--shuffle-gif'
  )

  //reload functionality for CTA
  reloadHandler() {
    this._shuffleCTA.addEventListener('click', () => {
      this._resetSection() //bind(this) wasn't working with a traditional function not sure why, so transformed this into arrow function :$
      this.controlRandom()
    })
  }

  //reset section for random gif
  _resetSection() {
    this.pictureParentSection().classList.remove('loaded')
    this.pictureSection().remove()
  }

  //API call for this view
  controlRandom = async function () {
    try {
      // get API data
      const data = await getJSON(API_RANDOM_GIF)
      // add gif structure into the page
      gifLoading(this.pictureParentSection(), data)
      // create a promise for the image to remove the loading screen only after the image is loaded
      await Promise.all(
        Array.from(this.pictureSectionElements()).map(async image => {
          // get response from image loader checker function
          await imageLoadChecker(image)
          // add class loaded if the promise fulfilled
          image.closest(this.imageParent).classList.add('loaded')
        })
      )
    } catch (err) {
      //return the error, err can be the image that didn't load from the promise all
      if (err.nodeType)
        return errorLoading(err, this.imageParent, `Image not found`)
      errorLoading(this.pictureParentSection(), this.imageParent, err.message)
    }
  }
}

export default new RandomView()
