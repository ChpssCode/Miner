/**
 * @brief Creates the world + the physics that go along with it.
 * @param refer refers to the 'create' function context
 */

function createWorld(refer) {
    refer.input.setDefaultCursor('url(assets/Cursor.png), pointer');
    refer.physics.world.setBounds(0,0, 2000, 2000, true, true, true, true
}