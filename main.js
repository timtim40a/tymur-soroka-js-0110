import Tabs from './tabs.js'
import getRandomArtwork from './api.js'

const tabs = new Tabs('.tab')
const featuredTab = document.querySelector('.tab__content[data-tab="featured"]')
const searchTab = document.querySelector('.tab__content[data-tab="search"]')
const formSubmitButton = document.getElementById('search-button')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
var yyyy = today.getFullYear()

today = mm + '/' + dd + '/' + yyyy

console.log(today)

formSubmitButton.addEventListener('click', (event) => getImageByQuery(event))

async function getImageOfTheDay() {
    const imgOfTheDay = document.createElement('img')
    const srcOfTheDay = localStorage.getItem(today)
    if (srcOfTheDay) {
        const artwork = srcOfTheDay
        imgOfTheDay.src = artwork
        imgOfTheDay.classList.add('artwork')
        featuredTab.appendChild(imgOfTheDay)
    } else {
        const artwork = await getRandomArtwork()
        imgOfTheDay.src = artwork
        imgOfTheDay.classList.add('artwork')
        featuredTab.appendChild(imgOfTheDay)
        localStorage.setItem(today, artwork)
    }
}

async function getImageByQuery(event) {
    event.preventDefault() // Prevents form submission and page reload
    const query = document.getElementById('search-input').value
    console.log(query)
    const artwork = await getRandomArtwork(query)
    // if image element has not been created yet: create it and set class, id and source
    if (!document.getElementById('image-by-query')) {
        const imgByQuery = document.createElement('img')
        imgByQuery.classList.add('artwork')
        imgByQuery.setAttribute('id', 'image-by-query')
        searchTab.appendChild(imgByQuery)
        imgByQuery.src = artwork
    }
    // otherwise just set the source
    else {
        const imgByQuery = document.getElementById('image-by-query')
        imgByQuery.src = artwork
    }
}

getImageOfTheDay()
