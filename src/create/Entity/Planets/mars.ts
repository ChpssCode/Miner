export default (getContext: any) => {
    getContext.mars = getContext.physics.add.image(1650, 3000, 'mars').setScale(1).setDepth(getContext.StaticInts.planetDepth);

    getContext.mars.setInteractive();
    getContext.mars.on("pointerup", () => {

    })
}