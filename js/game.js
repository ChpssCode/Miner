class Game extends Phaser.Scene
{   

    constructor ()
    {
        super({
            key: "Game"
        });
    }

    preload() {
    preloadImages(this);
    }

    create() {
    if(!localStorage.getItem("gameData")) {
          localStorage.setItem("gameData", JSON.stringify({'oxygen': 0, 'hydrogen': 0, 'water': 0, 'fuel': 2000, 'counter': 0, 'ship_x': 0, 'ship_y': 0}))
    }
    //Create foundation
    createVariables(this);
    createWorld(this);
    createKeys(this);
    createText(this);
    createPauseMenu(this);
    

    //create objects
    createBackground(this);
    createShip(this);
    createFactoryButton(this);
    createTerra(this);
    createDimidium(this);
    
    //create conversions
    convertWaterToOH(this);
    convertHydrogenToFuel(this);
    }
    update() {
    shipMovement(this);
    updateText(this);
    }
}