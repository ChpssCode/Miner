/**
 * @brief Creates the Dimidium object + Physics
 * @param refer refers to the 'create' function context
 */

function createDimidium(refer) {
 refer.Dimidium = refer.physics.add.image(1231, 325, 'Dimidium').setScale(0.3).setDepth(2);

  refer.Dimidium .setInteractive();
}