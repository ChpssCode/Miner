export default (getContext: any) => {
    getContext.WaterToHydrogenAndOxygen = getContext.add.text(window.innerWidth / 2, window.innerHeight / 3, "Object Text").setScrollFactor(0).setDepth(5).setFontSize(16).setColor('#000000')
    getContext.factory.add(getContext.WaterToHydrogenAndOxygen);
}