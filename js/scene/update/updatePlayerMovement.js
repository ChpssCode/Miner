function updatePlayerMovement() {

    resetPlayerMovement()
    movePlayerHorizontally()
    movePlayerVertically()

    // --------------------------------------------------- //

    function resetPlayerMovement() {
        player.setVelocity(0)
    }

    function movePlayerHorizontally() {
        if (cursors.left.isDown) {
            player.setVelocityX(-playerVelocity);
        } else if (cursors.right.isDown) {
            player.setVelocityX(playerVelocity);
        }
    }

    function movePlayerVertically() {
        if (cursors.up.isDown) {
            player.setVelocityY(-playerVelocity)
        } else if (cursors.down.isDown) {
            player.setVelocityY(playerVelocity)
        }
    }

}