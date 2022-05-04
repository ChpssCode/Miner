/**
 * @brief Updates the ship object based on inputted keys.
 * @param refer refers to the 'update' function context
 */

function shipMovement(refer) {
   if (refer.keys.W.isDown)
    {
        refer.physics.velocityFromRotation(refer.ship.rotation, 200, refer.ship.body.acceleration);
    }
    else
    {
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
    else
    {
        refer.ship.setAngularVelocity(0);
    }
}