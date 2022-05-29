/**
 * @brief converts Hydrogen to Fuel
 * @param refer refers to the 'create' function context
 */

function convertHydrogenToFuel(refer) {
     refer.convertHydrogenToFuel = refer.add.text(32, 80).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.convertHydrogenToFuel.setVisible(false);
     refer.convertHydrogenToFuelButton = refer.add.image(600, 80, "convert").setScrollFactor(0).setScale(0.3);
     refer.convertHydrogenToFuelButton.setVisible(false)
     refer.convertHydrogenToFuelButton.setInteractive();
     refer.convertHydrogenToFuelButton.on("pointerdown", () => {
          if(refer.getData.hydrogen === 0) {
             console.log("You can no longer convert any more material");
          }
          else if(refer.getData.hydrogen >= 1) {
               refer.getData.hydrogen--
               refer.getData.fuel++
          }
     })
}