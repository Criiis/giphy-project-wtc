import GeneralView from './viewHelpers'

class TrendingView extends GeneralView {
  _sectionName = 'trending-gif-container'
  _pictureParent = `.${this._sectionName}__picture-container`
  _parentElement = document.querySelector(`section.${this._sectionName}`)
  //search results container
  _resultContainer = this._parentElement.querySelector(
    `.${this._sectionName}__results`
  )
  //get all picture parent
  _pictureContainer = () =>
    Array.from(document.querySelectorAll(this._pictureParent))
}

export default new TrendingView()
