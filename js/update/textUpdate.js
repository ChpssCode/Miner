/**
 * @brief Updates the text displayed on screen.
 * @param refer refers to the 'update' function context
 */

function updateText(refer) {
    refer.speedText.setText('Speed: ' + refer.ship.body.speed);
    refer.fuelText.setText('Fuel: ' + refer.getData.fuel);
    refer.convertWaterToOH.setText(refer.getData.water + ' Water Molecule = ' + refer.getData.water * 2 + ' Hydrogen and ' + refer.getData.water + ' Oxygen');
    refer.convertHydrogenToFuel.setText(refer.getData.hydrogen + ' Hydrogen = ' + refer.getData.hydrogen + ' Fuel');
    refer.waterText.setText('Water: ' + refer.getData.water);
}