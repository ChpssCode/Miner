export default (getContext: any) => {
    getContext.terra = getContext.physics.add.image(200, 200, 'terra').setScale(0.3).setDepth(getContext.StaticInts.planetDepth);

    getContext.terra.setInteractive();
    getContext.terra.on("pointerup", () => {
        getContext.getData.water++;
    })
}

