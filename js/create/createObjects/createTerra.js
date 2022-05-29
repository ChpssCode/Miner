/**
 * @brief Creates the terra object + Physics
 * @param refer refers to the 'create' function context
 */

function createTerra(refer) {
 refer.terra = refer.physics.add.image(500,700, 'terra').setScale(0.3).setDepth(2);

  refer.terra.setInteractive();
  refer.terra.on("pointerup", () => {
    localStorage.setItem('water', refer.getData.water++)
  })
}