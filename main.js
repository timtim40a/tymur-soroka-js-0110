import Tabs from './tabs.js'
import getRandomArtwork from './api.js'

const tabs = new Tabs('.tab')
const featuredTab = document.querySelector('.tab__content[data-tab="featured"]')
const searchTab = document.querySelector('.tab__content[data-tab="search"]')
const formSubmitButton = document.getElementById('search-button')

formSubmitButton.addEventListener('click', (event) => getImageByQuery(event))

async function getImageOfTheDay() {
    const imgOfTheDay = document.createElement('img')
    const artwork = await getRandomArtwork()
    imgOfTheDay.src = artwork
    imgOfTheDay.classList.add('artwork')
    featuredTab.appendChild(imgOfTheDay)
}

async function getImageByQuery(event) {
    event.preventDefault() // Prevents form submission and page reload
    const query = document.getElementById('search-input').value
    console.log(query)
    const artwork = await getRandomArtwork(query)
    if (!document.getElementById('image-by-query')) {
        const imgByQuery = document.createElement('img')
        imgByQuery.classList.add('artwork')
        imgByQuery.setAttribute('id', 'image-by-query')
        searchTab.appendChild(imgByQuery)
        imgByQuery.src = artwork
    } else {
        const imgByQuery = document.getElementById('image-by-query')
        imgByQuery.src = artwork
    }
}

getImageOfTheDay()
