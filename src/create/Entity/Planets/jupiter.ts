export default (getContext: any) => {
    getContext.jupiter = getContext.physics.add.image(1225, 1500, 'jupiter').setScale(2).setDepth(getContext.StaticInts.planetDepth);

    getContext.jupiter.setInteractive();
    getContext.jupiter.on("pointerup", () => {

    })
}