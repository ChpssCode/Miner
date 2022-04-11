function updateEnemyMovement() {

    enemyAttackByFollowingPlayersCurrentPosition()

    // --------------------------------------------------- //

    function enemyAttackByFollowingPlayersCurrentPosition() {
        SCENE.physics.moveToObject(
            enemy, 
            player, 
            enemyVelocity
        )
    }

}