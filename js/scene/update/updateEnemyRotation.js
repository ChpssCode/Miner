function updateEnemyRotation() {

    rotateEnemyToFacePlayer(
        player.x + SCENE.cameras.main.scrollX,
        player.y + SCENE.cameras.main.scrollY
    )
    
    console.log(player.x, player.y, SCENE.cameras.main.scrollX, SCENE.cameras.main.scrollY)

    // --------------------------------------------------- //

    function rotateEnemyToFacePlayer(c1, c2) {
        enemy.setRotation(
            Phaser.Math.Angle.Between(
                enemy.x,
                enemy.y,
                c1, 
                c2
            ) - Math.PI / 2
        )
    }

}