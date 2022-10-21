export default (getContext: any) => {
    getContext.mercury = getContext.physics.add.image(2625, 3000, 'mercury').setScale(0.8).setDepth(getContext.StaticInts.planetDepth);

    getContext.mercury.setInteractive();
    getContext.mercury.on("pointerup", () => {

    })
}