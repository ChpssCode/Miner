export default (getContext: any) => {
    getContext.neptune = getContext.physics.add.image(300, 5700, 'neptune').setScale(1.3).setDepth(getContext.StaticInts.planetDepth);

    getContext.neptune.setInteractive();
    getContext.neptune.on("pointerup", () => {

    })
}