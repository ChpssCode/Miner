/**
 * @brief Updates the text displayed on screen.
 * @param refer refers to the 'update' function context
 */

function updateText(refer) {
    refer.speedText.setText('Speed: ' + refer.ship.body.speed);
    refer.fuelText.setText('Fuel: ' + refer.getData.fuel);
    refer.convertWaterToFuel.setText(refer.getData.water + ' Water Molecule = ' + refer.getData.water * 2 + ' Hydrogen and ' + refer.getData.water + ' Oxygen');
    refer.convertHydrogenToFuel.setText(refer.getData.hydrogen + ' Hydrogen = ' + refer.getData.hydrogen + ' Fuel');
    refer.waterText.setText('Water: ' + refer.getData.water);
    if(localStorage.getItem("gameData").fuel !== 2000) {
        localStorage.setItem("gameData", JSON.stringify({'oxygen': refer.getData.oxygen, 'hydrogen': refer.getData.hydrogen, 'water': refer.getData.water, 'fuel': refer.getData.fuel, 'counter': refer.getData.counter}))
    }
    else if(localStorage.getItem("gameData").fuel === 2000) {
        localStorage.setItem("gameData", JSON.stringify({'oxygen': 0, 'hydrogen': 0, 'water': 0, 'fuel': 2000, 'counter': 0}))
    }
}