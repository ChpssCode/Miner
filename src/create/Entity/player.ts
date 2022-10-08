export default (getContext) => {
    getContext.ship = getContext.physics.add.image(0, 0, 'ship').setScale(0.3).setDepth(3);
    getContext.camera = getContext.cameras.main.startFollow(getContext.ship);

    getContext.ship.body.collideWorldBounds = true;
    getContext.ship.setDamping(true);
    getContext.ship.setDrag(1);
    getContext.ship.setMaxVelocity(200);
}

