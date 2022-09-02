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
  } catch (error) {
    console.error(error)
  }
}

// export const resetImageLoading = element => {
//   element.classList.add('.loaded')
// }
