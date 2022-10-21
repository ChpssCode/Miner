export default (getContext: any) => {
    getContext.uranus = getContext.physics.add.image(5626, 1250, 'uranus').setScale(1.3).setDepth(getContext.StaticInts.planetDepth);

    getContext.uranus.setInteractive();
    getContext.uranus.on("pointerup", () => {

    })
}