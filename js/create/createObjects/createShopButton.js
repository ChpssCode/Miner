/**
 * @brief Creates the shop button object + Physics
 * @param refer refers to the 'create' function context
 */

function createShopButton(refer) {
 refer.storeButton = refer.add.image(1800, 45, "store").setScrollFactor(0).setScale(0.9);

 refer.storeButton.setInteractive()
 refer.storeButton.setInteractive()
 refer.storeButton.on("pointerup", () => {
       console.log("Clicked")
});
}