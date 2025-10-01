const apiKey = '5ad9f1c9dd254f1baa5b3b8d5a3ebbd9'

async function getArtwork(query = '') {
    if (query == '') {
        try {
            const response = await fetch(
                'https://api.artsearch.io/artworks/random/?api-key=5ad9f1c9dd254f1baa5b3b8d5a3ebbd9'
            )
            const data = await response.json()
            console.log(data)

            if (data) {
                return data.image

                /*{
                    id: artwork.id,
                    title: artwork.title,
                    image: artwork.image,
                    description: artwork.description,
                }*/
            }

            console.log('The image of the day has been successfully loaded')
        } catch {
            ;('Error fetching the artwork of the day.')
        }
    } else {
        try {
            const response = await fetch(
                `https://api.artsearch.io/artworks/?query=${query}&number=1&api-key=5ad9f1c9dd254f1baa5b3b8d5a3ebbd9`
            )
            const data = await response.json()
            console.log(data)

            if (data) {
                return data.artworks[0].image

                /*{
                    id: artwork.id,
                    title: artwork.title,
                    image: artwork.image,
                    description: artwork.description,
                }*/
            }

            console.log('The image by query has been successfully loaded')
        } catch {
            ;('Error fetching the artwork by query.')
        }
    }
}

export default getArtwork
