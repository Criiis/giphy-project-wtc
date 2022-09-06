import { errorLoading, getJSON, promiseAllImage } from '../helpers.js'

/**
 *
 * @param { title, images } -> data from the API
 * @returns template literals with the picture
 */
export const gifStructure = ({ title, images }) => {
  const gifDescription = title === '' ? 'unknown gif' : title
  return `
<picture>
    <source type="image/webp" media="(max-width: 728px)" srcset="${images.preview_webp.url}"/> 
    <source type="image/webp" srcset="${images.original.webp}"/>
    <source media="(max-width: 728px)" srcset="${images.preview_webp.url}"/>
    <img src="${images.original.url}" alt="${gifDescription}" loading="lazy" />
</picture>
`
}
/**
 *
 * @param {*} message -> error
 * @returns template literals with the error
 */
export const gifError = message =>
  `<p class="error">Sorry, ${message}. Try again.</p>`

/**
 *
 * @param {*} data -> data from the API
 * @param {*} section -> section where the picture container will sit
 * @returns template literals with the picture + container
 */
export const singleGifContainer = (data, section = 'search-gif-container') => `
<div class="${
  section === 'search-gif-container' ? section : 'trending-gif-container'
}__picture-container">${gifStructure(data)}</div>`

/**
 * create general view to hold the parent class with the fetch function for trending and finder section
 */
export default class GeneralView {
  fetchingGifData = async function (url) {
    try {
      if (!url) throw new Error('Could not fetch data')
      // get API data
      const data = await getJSON(url)
      if (data.length === 0) throw new Error('Could not find any results')

      //remove error from result div
      this._resultContainer.classList.remove('error')

      //apply the each gif to the page
      data.forEach(gif =>
        this._resultContainer.insertAdjacentHTML(
          'beforeend',
          singleGifContainer(gif, this._sectionName)
        )
      )

      // check the image is loaded or not for each picture container
      this._pictureContainer().forEach(async container => {
        try {
          // if fulfilled remove the loading screen by adding a class
          await promiseAllImage(
            container.querySelectorAll('picture *'),
            this._pictureParent
          )
        } catch (err) {
          // rejected add an error to image container -> err in this case will be the image element
          console.error(err)
          errorLoading(err, `Image not found`, this._pictureParent)
        }
      })
    } catch (err) {
      //if api call rejected then add error to section
      console.error(err)
      errorLoading(this._resultContainer, err)
    }
  }
}
