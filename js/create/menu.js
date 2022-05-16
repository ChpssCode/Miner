/**
 * @brief Creates the menu thta is show on key F
 * @param refer refers to the 'create' function context
 */

function menu(refer) {
 refer.menuBackground = refer.add.image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground").setScrollFactor(0).setScale(1.4).setDepth(5).setVisible(false);
 refer.logo = refer.add.image(window.innerWidth / 2, window.innerHeight / 7, "logo").setScrollFactor(0).setDepth(6).setVisible(false);
 refer.homeButton = refer.add.image(window.innerWidth / 2, window.innerHeight / 3.5, "homeButton").setScrollFactor(0).setScale(0.3).setDepth(6).setVisible(false);
 refer.homeButton.setInteractive();
 let menuStatus = false;
 refer.input.keyboard.on("keydown-ESC", () => {
    if(menuStatus === true) {
       refer.menuBackground.setVisible(false)
       refer.logo.setVisible(false)
       refer.homeButton.setVisible(false)
       menuStatus = false;
       console.log("Off")
    }
    else if(menuStatus === false) {
       refer.menuBackground.setVisible(true)
       refer.logo.setVisible(true)
       refer.homeButton.setVisible(true)
       refer.ship.setVelocity(0,)
       menuStatus = true;
       console.log("On")
    }
 })
 refer.homeButton.on("pointerup", () => { refer.scene.start('Startscreen') })
}