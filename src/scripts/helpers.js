import { gifError, gifStructure } from './views/viewHelpers'
// This file contains all the functions that will be used multiple times

/**
 * function to stop the fetch if it takes very long time to fetch
 * @param {*} s -> number of seconds until it will return the fulfilled or rejected promise
 */
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

/**
 * simple function to fetch data to feed the HTML structure
 * @param url -> url to fetch data
 * @returns -> return the data to be used for HTML
 */
export const getJSON = async url => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Couldn't fetch data, pls try again!`)
    const { data } = await res.json()
    return data
  } catch (err) {
    throw err
  }
}

/**
 * will return a fulfilled or a rejected promise when the imageElement param is loaded
 * @param {*} imageElement
 * @returns
 */
export const imageLoadChecker = imageElement => {
  return new Promise((resolve, reject) => {
    imageElement.addEventListener('load', function () {
      resolve(this)
    })

    imageElement.addEventListener('error', function () {
      reject(this)
    })
  })
}

/**
 * will return a fulfilled or rejected promise for all once the one of the images inside of the picture is loaded
 * @param {*} pictureChild -> all childs of the picture element
 * @param {*} pictureParent -> the string to find the closest element of the image loaded for example -> '.random-gif-container__picture-container'
 */
export const promiseAllImage = async (pictureChild, pictureParent) => {
  try {
    return await Promise.all(
      Array.from(pictureChild).map(async image => {
        // get response from image loader checker function
        await imageLoadChecker(image)
        // add class loaded if the promise fulfilled
        image.closest(pictureParent)?.classList.add('loaded')
      })
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * clean div and add data to page
 * @param {*} imageParentContainer -> parent of the picture element
 * @param {*} data -> data to build the structure
 */
export const gifLoading = (imageParentContainer, data) => {
  imageParentContainer.classList.remove('error')
  imageParentContainer.innerHTML = ''
  // create and insert the image element into HTML behind the loading container
  imageParentContainer.insertAdjacentHTML('beforeend', gifStructure(data))
}

/**
 * clean div and add error to page
 * @param {*} imageParentContainer -> parent of the picture element
 * @param {*} error -> error message to print
 */
export const errorLoading = (element, error, imageContainer = undefined) => {
  element = imageContainer ? element.closest(imageContainer) : element //had to do this cause element can be an image and i need the container of the picture/image checky tho
  element.innerHTML = ''
  element.insertAdjacentHTML('beforeend', gifError(error))
  element.classList.add('error')
}
