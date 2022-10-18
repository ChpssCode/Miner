export default (getContext: any) => {
    getContext.terra = getContext.physics.add.image(3000, 1875, 'earth').setScale(0.3).setDepth(getContext.StaticInts.planetDepth);

    getContext.terra.setInteractive();
    getContext.terra.on("pointerup", () => {
        getContext.getData.water++;
    })
}

