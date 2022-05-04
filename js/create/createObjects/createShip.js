/**
 * @brief Creates the ship object + physics
 * @param refer refers to the 'create' function context
 */

function createShip(refer) {
 refer.ship = refer.physics.add.image(0, 0, 'ship').setScale(0.3).setDepth(3);

 refer.camera = refer.cameras.main.startFollow(refer.ship);

 //Set World Bounds

 refer.ship.body.collideWorldBounds=true;

 //Create Physics
 refer.ship.setDamping(true);
 refer.ship.setDrag(3);
 refer.ship.setMaxVelocity(250);
}