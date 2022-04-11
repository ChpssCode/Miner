let SCENE = new Phaser.Scene('scene_name_here')

let SCENE_WIDTH = 2560
let SCENE_HEIGHT = 1600

const config = {
    type: Phaser.Scale.CENTER_BOTH,
    scale: {
        mode: Phaser.Scale.ENVELOP,
    },
    autoCenter: Phaser.Scale.CENTER_BOTH,
    backgroundColor: '#0072bc',
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: SCENE
}

let scene_name_here = new Phaser.Game(config)

// --------------------------------------------------- //

let
    camera, 
    cursors, 
    enemy,
    enemyVelocity,
    mouseX,
    mouseY,
    player,
    playerVelocity


SCENE.init = () => {
    initGlobalVariables()
}

SCENE.preload = () => {
    preloadImages()
}

SCENE.create = () => {
    createBackgroundImage()
    createPlayer()
    createEnemy()
    createCamera()
}
    
SCENE.update = (time, delta) => {
    updatePlayerMovement()
    updatePlayerRotation()
    updateEnemyMovement()
    updateEnemyRotation()

/*
function movementCode() {

    overall_move_speed = 10

    left_border_pixel_location = 0
    top_border_pixel_location = 0
    right_border_pixel_location = 1000
    bottom_border_pixel_location = 1000

    minimum_move_time = 50
    maximum_move_time = 200
    minimum_delay_between_move = 50
    maximum_delay_between_move = 100

    current_move_time = getRandomWholeNumberBetweenRange(minimum_move_time, maximum_move_time)
    current_delay_between_move = getRandomWholeNumberBetweenRange(minimum_delay_between_move, maximum_delay_between_move)
    
    moveInRandomDirectionByInterval({
        'moveTime': current_move_time,
        'delayBetweenMove': current_delay_between_move
    })

    function moveInRandomDirectionByInterval(o) {
        'moveTime'
        'delayBetweenMove'
    }

    //!! - rotate in the directon moving

    function getRandomWholeNumberBetweenRange(min, max) {
        return Math.round((min + Math.random() * (max - min)))
    }

    }
    */

}