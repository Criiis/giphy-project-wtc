/**
 * all config needed for this project // some of this things could be in a .env file
 */

export const API_TIMEOUT_SEC = 15
export const API_URL = 'https://api.giphy.com/v1/gifs/'
export const API_TOKEN = 'XSRthheAmTaIEIj4hLXVcyseFf4ME5Aa'

export const API_RANDOM_GIF = `${API_URL}random?api_key=${API_TOKEN}&lang=en&rating=g`
export const API_TRENDING_GIF = `${API_URL}trending?api_key=${API_TOKEN}&lang=en&rating=g&limit=10`
export const API_SEARCH_GIF = `${API_URL}search?api_key=${API_TOKEN}&limit=30`
