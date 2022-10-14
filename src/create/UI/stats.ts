export default (getContext) => {
    getContext.speedText = getContext.add.text(32, 32, "Text Object").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    getContext.waterText = getContext.add.text(32, 56, "Text Object").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    getContext.fuelText = getContext.add.text(32, 80, "Text Object").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
}

