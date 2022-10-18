export default (getContext: any) => {
    getContext.speedText.setText("Speed: " + getContext.player.body.speed)
    getContext.fuelText.setText('Fuel: ' + getContext.getData.fuel);
    /*
    getContext.convertWaterToOH.setText(getContext.getData.water + ' Water Molecule = ' + getContext.getData.water * 2 + ' Hydrogen and ' + getContext.getData.water + ' Oxygen');
    getContext.convertHydrogenToFuel.setText(getContext.getData.hydrogen + ' Hydrogen = ' + getContext.getData.hydrogen + ' Fuel');
    */
    getContext.waterText.setText('Water: ' + getContext.getData.water);
     getContext.positionText.setText('Position X:' + Math.floor(getContext.getData.player_x) + " Position Y: " + Math.floor(getContext.getData.player_y));
}

