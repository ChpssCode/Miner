export default (getContext) => {
    getContext.keys = {
        "W": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        "A": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        "S": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        "D": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        "C": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
    };
}

