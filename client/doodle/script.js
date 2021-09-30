document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount=5

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace +'px'
        doodler.style.bottom = doodlerBottomSpace +'px'

    }

    function createPlatforms() {
        for (let i=0; i<platformCount; i++) {
            let platformSpace = 600/platformCount
            let newPlatBottom = 100 + i * platformSpace
        }
    }


    function start() {
        if (!isGameOver) {
            createDoodler()

        }
    }

    start()
})