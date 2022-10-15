export default function Stats_Update(getContext: any) {
    getContext.speedText.setText("Speed: " + getContext.player.body.speed)
    getContext.fuelText.setText('Fuel: ' + getContext.getData.fuel);
    /*
    getContext.convertWaterToOH.setText(getContext.getData.water + ' Water Molecule = ' + getContext.getData.water * 2 + ' Hydrogen and ' + getContext.getData.water + ' Oxygen');
    getContext.convertHydrogenToFuel.setText(getContext.getData.hydrogen + ' Hydrogen = ' + getContext.getData.hydrogen + ' Fuel');
    */
    getContext.waterText.setText('Water: ' + getContext.getData.water);
}

