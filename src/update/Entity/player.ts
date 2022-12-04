export default (getContext: any) => {
    if (getContext.keys.W.isDown && getContext.getData.fuel > 0) {
        getContext.physics.velocityFromRotation(getContext.player.rotation, 200, getContext.player.body.acceleration);
        getContext.player.setDrag(1);
        getContext.getData.fuel--;
    }
    else {
        getContext.player.setAcceleration(0);
    }
    if (getContext.keys.A.isDown) {
        getContext.player.setAngularVelocity(-300);
    }
    else if (getContext.keys.D.isDown) {
        getContext.player.setAngularVelocity(300);
    }
    else if (getContext.keys.S.isDown) {
        getContext.player.setDrag(0.5);
    }
    else {
        getContext.player.setAngularVelocity(0);
    }
    getContext.getData.player_x = getContext.player.x;
    getContext.getData.player_y = getContext.player.y;
}

