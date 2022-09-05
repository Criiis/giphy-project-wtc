import { API_RANDOM_GIF } from '../config.js'
import {
  errorLoading,
  getJSON,
  gifLoading,
  promiseAllImage,
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
    this.pictureParentSection()?.classList.remove('loaded')
    this.pictureSection()?.remove()
  }

  //API Fetch call for this view
  controlRandom = async function () {
    try {
      // get API data
      const data = await getJSON(API_RANDOM_GIF)
      // add gif structure into the page
      gifLoading(this.pictureParentSection(), data)

      await promiseAllImage(this.pictureSectionElements(), this.imageParent)
    } catch (err) {
      //IMPORTANT
      //:TODO CAN BE IMPROVED TO A SINGLE FUNCTION
      //

      //return the error, err can be the image that didn't load from the promise all
      console.error(err)
      if (err.nodeType)
        return errorLoading(err, `Image not found`, this.imageParent)
      errorLoading(this.pictureParentSection(), err.message)
    }
  }
}

export default new RandomView()
