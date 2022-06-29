/**
 * @brief converts Water to Fuel
 * @param refer refers to the 'create' function context
 */

function convertWaterToFuel(refer) {
     refer.convertWaterToFuel = refer.add.text(32, 32).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.convertWaterToFuel.setVisible(false);
     refer.convertWaterToFuelButton = refer.add.image(600, 32, "convert").setScrollFactor(0).setScale(0.3);
     refer.convertWaterToFuelButton.setVisible(false)
     refer.convertWaterToFuelButton.setInteractive();
     refer.convertWaterToFuelButton.on("pointerdown", () => {
          if(refer.getData.water === 0) {
             console.log("You can no longer convert any more material");
          }
          else if(localStorage.getItem('water') >= 1) {
               refer.getData.hydrogen+=2
               refer.getData.water--
               refer.getData.oxygen++
          }
     })
}