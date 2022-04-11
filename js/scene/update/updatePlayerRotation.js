function updatePlayerRotation() {

    rotatePlayerToFaceMouse(
        SCENE.input.mousePointer.x + SCENE.cameras.main.scrollX,
        SCENE.input.mousePointer.y + SCENE.cameras.main.scrollY
    )

    // --------------------------------------------------- //

    function rotatePlayerToFaceMouse(c1, c2) {
        player.setRotation(
            Phaser.Math.Angle.Between(
                player.x, 
                player.y, 
                c1, 
                c2
            ) - Math.PI / 2
        )
    }

}