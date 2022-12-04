export default (getContext: any) => {
    if(localStorage.getItem("mobileState") === "false") {
        getContext.keys = {
        "W": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        "A": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        "S": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        "D": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        "C": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
    };
    }
    else if(localStorage.getItem("mobileState") === "true") {
        getContext.keys = {
        "W": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        "A": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        "S": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        "D": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        "C": getContext.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
    };
    }
}

