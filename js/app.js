/**
 * Array of albums
 *  id, artist, title, label, stars, genre, group "new or fave"
 * 
 */

const albums = [
    {
        id: "01241-41418-1",
        artist: 'a tribe called quest',
        title: 'the low end theory',
        label: 'jive',
        stars: 5,
        genre: 'hip hop',
        yrReleased: 1991,
        group: 'fave'
    },
    {
        id: '602475686750',
        artist: 'kendrick lamar',
        title: 'GNX',
        label: 'interscope',
        stars: 4,
        genre: 'hip hop',
        yrReleased: 2025,
        group: 'new'
    },
    {
        id: 'ART-014',
        artist: 'snoh aalegra',
        title: 'temporary highs in the violet skies',
        label: 'ARTIum',
        stars: 3,
        genre: 'r&b/soul',
        yrReleased: 2022,
        group: 'new'
    },
    {
        id: 'PD-2-3007',
        artist: 'james brown',
        title: 'the payback',
        label: 'polydor',
        stars: 4,
        genre: 'funk',
        yrReleased: 1973,
        group: 'fave'
    },
    {
        id: 'CR00518',
        artist: 'johnny hammond',
        title: 'gears',
        label: 'milestone',
        stars: 5,
        genre: '#BAM',
        yrReleased: 1975,
        group: 'new'
    },
    {
        id: 'AKR-015',
        artist: 'lynda dawn',
        title: 'at first light',
        label: 'akashik',
        stars: 4,
        genre: 'soul',
        yrReleased: 2019,
        group: 'new'
    },
    {
        id: 'MOVLP1124',
        artist: 'erykah badu',
        title: "Mama's Gun",
        label: 'motown',
        stars: 5,
        genre: 'soul',
        yrReleased: 2000,
        group: 'fave'
    },
    {
        id: 'BST-31875',
        artist: 'donald byrd',
        title: 'kofi',
        label: 'blue note',
        stars: 5,
        genre: '#BAM',
        yrReleased: 1995,
        group: 'new'
    },
    {
        id: 'BIN-LA368-G',
        artist: 'donald byrd',
        title: 'stepping into tomorrow',
        label: 'blue note',
        stars: 5,
        genre: '#BAM',
        yrReleased: 1975,
        group: 'fave'
    },
    {
        id: 'RM039',
        artist: 'french kiwi juice',
        title: 'fkj',
        label: 'roche musique',
        stars: 3,
        genre: 'synth-pop',
        yrReleased: 2017,
        group: 'new'
    },
    {
        id: 'LVR04335',
        artist: 'common & pete rock',
        title: 'the auditorium vol. 1',
        label: 'loma vista',
        stars: 4,
        genre: 'hip hop',
        yrReleased: 2024,
        group: 'fave'
    },
    {
        id: 'VBR38116',
        artist: 'roy hargrove',
        title: 'hard groove',
        label: 'verve',
        stars: 5,
        genre: '#BAM',
        yrReleased: 2023,
        group: 'fave'
    }
]

// build card
const buildCard =(obj)=> {
    const column = document.createElement('div')
    column.classList.add('col')

    const cardColor = obj.group == 'new' ? 'success' : 'primary'

    const card = document.createElement('div')
    card.classList.add('card', 'h-100', `text-bg-${cardColor}`)
    card.setAttribute('id', `card_${obj.id}`)

    const cardHeader = document.createElement('header')
    cardHeader.classList.add('card-header')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title', 'text-capitalize')
    cardTitle.innerText = obj.title

    cardHeader.appendChild(cardTitle)

    const cardBody = document.createElement('section')
    cardBody.classList.add('card-body')

    const cardArtist = document.createElement('h3')
    cardArtist.classList.add('text-capitalize', 'fst-italic')
    cardArtist.innerText = obj.artist

    const cardYrReleased = document.createElement('p')
    cardYrReleased.classList.add('card-text')
    cardYrReleased.innerText = `Released: ${obj.yrReleased}`

    const cardLabel = document.createElement('p')
    cardLabel.classList.add('card-text', 'text-capitalize')
    cardLabel.innerText = `Label: ${obj.label}`

    cardBody.appendChild(cardArtist)
    cardBody.appendChild(cardYrReleased)
    cardBody.appendChild(cardLabel)

    
    const cardFooter = document.createElement('footer')
    cardFooter.classList.add('card-footer')
    
    const starDisplay = document.createElement('p')
    let stars = ''

    while (obj.stars > 0) {
        stars = stars + '⭐️'
        obj.stars--
    }



    starDisplay.innerText = stars

    cardFooter.appendChild(starDisplay)

    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)

    column.appendChild(card)

    return column

}

// load All albums
const loadAll =(arr)=> {
    const groups = ['new', 'fave']

    groups.forEach(group => {
        const row = document.getElementById(`${group}Row`)

        for (let item of arr) {
            if (item.group == group) {
                
                row.appendChild(buildCard(item))
            }
        }
    })

}

loadAll(albums)





