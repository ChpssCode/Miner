/**
 * @brief Creates the ship object + physics
 * @param refer refers to the 'create' function context
 */

function createShip(refer) {
 refer.ship = refer.physics.add.image(refer.getData.ship_x, refer.getData.ship_y, 'ship').setScale(0.3).setDepth(3);
 let ship = refer.ship;
 refer.camera = refer.cameras.main.startFollow(refer.ship);

 //Set World Bounds

 refer.ship.body.collideWorldBounds=true;

 //Create Physics
 ship.setDamping(true);
 ship.setDrag(1);
 ship.setMaxVelocity(200);
}