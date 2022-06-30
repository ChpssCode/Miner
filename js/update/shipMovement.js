/**
 * @brief Updates the ship object based on inputted keys.
 * @param refer refers to the 'update' function context
 */

function shipMovement(refer) {
    if (refer.keys.W.isDown && refer.getData.fuel > 0)
    {
       refer.physics.velocityFromRotation(refer.ship.rotation, 200, refer.ship.body.acceleration);
       refer.ship.setDrag(1.0); 
       refer.getData.fuel--
    }
    else {
         refer.ship.setAcceleration(0);
    }
    if (refer.keys.A.isDown)
    {
       refer.ship.setAngularVelocity(-300);
    }
    else if (refer.keys.D.isDown)
    {
        refer.ship.setAngularVelocity(300);
    }
    else if(refer.keys.S.isDown) {
        refer.ship.setDrag(0.5);
    }
    else
    {
        refer.ship.setAngularVelocity(0);
    }
    refer.getData.ship_x = refer.ship.x;
    refer.getData.ship_y = refer.ship.y;
}