//functionality for mobile nav clicks
export const navController = e => {
  e.preventDefault()
  const button = e.target.closest('.nav__item')
  const dataSection = button.dataset.section
  const allNavItems = Array.from(document.querySelectorAll('.nav__item'))
  const allSectionItems = Array.from(document.querySelectorAll('.section'))
  const sectionToActivate = document.querySelector(`.${dataSection}`)
  const navActivateClass = 'nav__item--active'
  const sectionActivateClass = 'section--active'

  //remove class for nav and section
  allNavItems.forEach(el => el.classList.remove(navActivateClass))
  allSectionItems.forEach(el => el.classList.remove(sectionActivateClass))

  //add class for active nav and section
  button.classList.add(navActivateClass)
  sectionToActivate.classList.add(sectionActivateClass)
}
