class Tabs {
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector)
        this.tabButtons =
            this.tabsContainer.querySelectorAll('.tab__list__button')
        this.tabContents = this.tabsContainer.querySelectorAll('.tab__content')

        this.tabButtons.forEach((tabButton) => {
            tabButton.addEventListener('click', (event) =>
                this.tabClicked(event)
            )
        })
        console.log('constructed instance of Tabs class')
    }

    tabClicked(event) {
        const clickedButton = event.currentTarget
        const tabId = clickedButton.dataset.tab
        const detailsElement = this.tabsContainer.querySelector(
            `.tab__content[data-tab="${tabId}"]`
        )

        this.tabButtons.forEach((button) => {
            button.classList.remove('selected__button')
        })
        this.tabContents.forEach((content) => {
            content.classList.remove('selected__tab__content')
        })

        clickedButton.classList.add('selected__button')
        detailsElement.classList.add('selected__tab__content')
        console.log('button ' + tabId + ' has been pressed')
    }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs
