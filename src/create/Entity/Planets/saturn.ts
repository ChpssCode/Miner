export default (getContext: any) => {
    getContext.saturn = getContext.physics.add.image(5250, 3000, 'saturn').setScale(0.8).setDepth(getContext.StaticInts.planetDepth);

    getContext.saturn.setInteractive();
     getContext.saturn.on("pointerup", () => {

    })
}