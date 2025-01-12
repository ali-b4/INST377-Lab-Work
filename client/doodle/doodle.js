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

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() *315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left +'px'
            visual.style.bottome = this.bottom +'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        for (let i=0; i<platformCount; i++) {
            let platformSpace = 600/platformCount
            let newPlatBottom = 100 + i * platformSpace
            let newPlatform = new Platform(newPlatBottom)
            console.log(platforms)
        }
    }


    function start() {
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
            

        }
    }

    start()
})