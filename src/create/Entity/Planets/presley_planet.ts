export default (getContext: any) => {
    getContext.presley_planet = getContext.physics.add.image(1500, 450, 'presley_planet').setScale(1.2).setDepth(getContext.StaticInts.planetDepth);

    getContext.presley_planet.setInteractive();
    getContext.presley_planet.on("pointerup", () => {
      
    })
    return;
}