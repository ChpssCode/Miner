function createBackgroundImage() {
    SCENE.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1)
    SCENE.add.image(SCENE_WIDTH, 0, 'map').setOrigin(0).setScrollFactor(1)
    SCENE.add.image(0, SCENE_HEIGHT, 'map').setOrigin(0).setScrollFactor(1)
    SCENE.add.image(SCENE_WIDTH, SCENE_HEIGHT, 'map').setOrigin(0).setScrollFactor(1)
}