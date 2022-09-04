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
  reloadHandler(handler) {
    this._shuffleCTA.addEventListener('click', () => {
      this._resetSection() //bind(this) wasn't working with a traditional function not sure why, so transformed this into arrow function :$
      handler()
    })
  }

  //reset section for random gif
  _resetSection() {
    this.pictureParentSection().classList.remove('loaded')
    this.pictureSection().remove()
  }
}

export default new RandomView()
