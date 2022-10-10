export default (getContext) => {
    getContext.player = getContext.physics.add.image(getContext.getData.player_x, getContext.getData.player_y, 'player').setScale(0.3).setDepth(3);
    getContext.camera = getContext.cameras.main.startFollow(getContext.player);

    getContext.player.body.collideWorldBounds = true;
    getContext.player.setDamping(true);
    getContext.player.setDrag(1);
    getContext.player.setMaxVelocity(200);
}

