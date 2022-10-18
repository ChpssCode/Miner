export default (getContext: any) => {
    getContext.presley_planet = getContext.physics.add.image(3750, 3000, 'venus').setScale(1.2).setDepth(getContext.StaticInts.planetDepth);

    getContext.presley_planet.setInteractive();
    getContext.presley_planet.on("pointerup", () => {
      
    })
    return;
}