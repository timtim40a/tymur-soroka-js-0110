import Tabs from './tabs.js'
import getRandomArtwork from './api.js'

const tabs = new Tabs('.tab')
const featuredTab = document.querySelector('.tab__content[data-tab="featured"]')
const searchTab = document.querySelector('.tab__content[data-tab="search"]')

async function getImageOfTheDay() {
    const imgOfTheDay = document.createElement('img')
    const artwork = await getRandomArtwork()
    imgOfTheDay.src = artwork
    imgOfTheDay.classList.add('artwork')
    featuredTab.appendChild(imgOfTheDay)
}

async function getImageByQuery() {
    const imgByQuery = document.createElement('img')
    const artwork = await getRandomArtwork()
    imgByQuery.src = artwork
    imgByQuery.classList.add('artwork')
    featuredTab.appendChild(imgByQuery)
}

getImageOfTheDay()
