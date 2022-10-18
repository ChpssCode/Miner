export default (getContext: any) => {
    getContext.sun = getContext.physics.add.image(3000, 3000, 'sun').setDepth(getContext.StaticInts.planetDepth);

    getContext.sun.setInteractive();
    getContext.sun.on("pointerup", () => {
      
    })
    return;
}