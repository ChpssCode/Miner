function createPlayer() {
    player = SCENE.physics.add.image(800, 800, "hero")
    player.setCollideWorldBounds(true)
}