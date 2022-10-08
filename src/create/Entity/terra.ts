export default (context) => {
    context.terra = context.physics.add.image(200, 200, 'terra').setScale(0.3).setDepth(2);

    context.terra.setInteractive();
    context.terra.on("pointerup", () => {
        context.getData.water++;
        context.terra.setScale(0.31);
    })
}

