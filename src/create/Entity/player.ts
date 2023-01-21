export default (getContext: any) => {
     const movementAnimConfig = {
            key: 'moving',
            frames: 'atlas',
            frameRate: 10,
            repeat: -1
    };

    getContext.anims.create(movementAnimConfig)
    getContext.player = getContext.physics.add.sprite(getContext.getData.player_x, getContext.getData.player_y, 'atlas', 'frame_0').setScale(0.3).setDepth(getContext.StaticInts.playerDepth);
    getContext.camera = getContext.cameras.main.startFollow(getContext.player);

    getContext.player.body.collideWorldBounds = true;
    getContext.player.setDamping(true);
    getContext.player.setDrag(1);
    getContext.player.setMaxVelocity(200);

    getContext.player.play('moving');
}

