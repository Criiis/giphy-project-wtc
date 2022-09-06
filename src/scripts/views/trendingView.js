import { API_TRENDING_GIF } from '../config.js'
import {
  errorLoading,
  getJSON,
  promiseAllImage,
  imageLoadChecker,
} from '../helpers.js'
import { singleGifContainer } from './viewHelpers.js'

class TrendingView {
  _parentElement = document.querySelector('section.trending-section')
  imageParent = '.trending-section--picture-container'

  //fetch search gif api
  searchGif = async function () {
    try {
      // get API data
      const data = await getJSON(API_TRENDING_GIF)
      console.log(data)

      data.forEach(data =>
        document
          .querySelector('.trending-section--results')
          .insertAdjacentHTML('beforeend', singleGifContainer(data))
      )

      // check the image is loaded or not
      Array.from(
        document.querySelectorAll(
          '.trending-section--results .search-section--picture-container'
        )
      ).forEach(async container => {
        try {
          console.log(container)
          await promiseAllImage(
            container.querySelectorAll('picture *'),
            '.search-section--picture-container'
          )
        } catch (err) {
          errorLoading(
            err,
            `Image not found`,
            '.search-section--picture-container'
          )
          console.error(err)
        }
      })
    } catch (err) {
      console.log(err)
      errorLoading(document.querySelector('.trending-section--results'), err)
    }
  }
}

export default new TrendingView()
