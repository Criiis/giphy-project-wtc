export const gifStructure = ({ title, images }) => `
<picture class="random-section--picture">
    <source type="image/webp" media="(max-width: 728px)" srcset="${images.fixed_height.webp}" /> 
    <source type="image/webp" srcset="${images.original.webp}" />
    <source media="(max-width: 728px)" srcset="${images.downsized.url}" />
    <img src="${images.original.url}" alt="${title}" loading="lazy" />
</picture>
`

export const gifError = message => `<p>Sorry, ${message}. Try again.</p>`

// bitly_gif_url: "https://gph.is/g/46qmJ69"
// bitly_url: "https://gph.is/g/46qmJ69"
// content_url: ""
// embed_url: "https://giphy.com/embed/U6pOjRAUmICUL2dR4B"
// id: "U6pOjRAUmICUL2dR4B"
// images: {hd: {…}, fixed_width_still: {…}, fixed_height_downsampled: {…}, preview_gif: {…}, preview: {…}, …}
// import_datetime: "2020-05-02 16:47:47"
// is_sticker: 0
// rating: "g"
// slug: "running-bird-gif-artist-U6pOjRAUmICUL2dR4B"
// source: "https://www.instagram.com/foodie_g86821/"
// source_post_url: "https://www.instagram.com/foodie_g86821/"
// source_tld: "www.instagram.com"
// title: "Run Ok GIF by foodieg"
// trending_datetime: "2020-05-05 17:45:09"
// type: "gif"
// url: "https://giphy.com/gifs/running-bird-gif-artist-U6pOjRAUmICUL2dR4B"
// user: {avatar_url: 'https://media1.giphy.com/avatars/sun86821/PV5lh9n1BhN1.gif', banner_image: 'https://media1.giphy.com/headers/sun86821/641Vs78Dcjhy.png', banner_url: 'https://media1.giphy.com/headers/sun86821/641Vs78Dcjhy.png', profile_url: 'https://giphy.com/foodieg/', username: 'foodieg', …}
// username: "foodieg"

{
  /* <picture class="image-block__image">
    <img srcset="./img/rose_480.png 480w, ./img/rose.png 728w" sizes="(max-width: 728px) 480px" src="./img/rose.png" alt="rose PNG" />
</picture>

<picture class="image-block__image">
    <source srcset="./img/screen.webp" type="image/webp">
    <img src="./img/screen.jpg" alt="screen WEBP" />
</picture>

<picture class="image-block__image">
    <source media="(max-width: 728px)" srcset="./img/410_480.svg" type="image/svg+xml">
    <source srcset="./img/410.svg" type="image/svg+xml">

    <img src="./img/410.png" alt="410 SVG" />
</picture> */
}
