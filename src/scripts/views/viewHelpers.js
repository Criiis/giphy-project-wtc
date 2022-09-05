export const gifStructure = ({ title, images }) => `
<picture class="random-section--picture">
    <source type="image/webp" media="(max-width: 728px)" srcset="${images.preview_webp.url}}" /> 
    <source type="image/webp" srcset="${images.original.webp}" />
    <source media="(max-width: 728px)" srcset="${images.preview_webp.url}" />
    <img src="${images.original.url}" alt="${title}" loading="lazy" />
</picture>
`

export const gifError = message => `<p>Sorry, ${message}. Try again.</p>`
