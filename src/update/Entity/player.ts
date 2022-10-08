export default (getContext) => {
    if (getContext.keys.W.isDown && getContext.getData.fuel > 0) {
        getContext.physics.velocityFromRotation(getContext.ship.rotation, 200, getContext.ship.body.acceleration);
        getContext.ship.setDrag(1);
        getContext.getData.fuel--;
    }
    else {
        getContext.ship.setAcceleration(0);
    }
    if (getContext.keys.A.isDown) {
        getContext.ship.setAngularVelocity(-300);
    }
    else if (getContext.keys.D.isDown) {
        getContext.ship.setAngularVelocity(300);
    }
    else if (getContext.keys.S.isDown) {
        getContext.ship.setDrag(0.5);
    }
    else {
        getContext.ship.setAngularVelocity(0);
    }
    getContext.getData.ship_x = getContext.ship.x;
    getContext.getData.ship_y = getContext.ship.y;
}

