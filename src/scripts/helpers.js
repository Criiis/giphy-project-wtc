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
      console.log('loaded')
      resolve(this)
    })

    imageElement.addEventListener('error', function () {
      reject(new Error(`Image not found.`))
      // throw err
    })
  })
}
