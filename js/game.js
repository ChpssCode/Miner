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
    
    //create conversions
    convertWaterToFuel(this);
    convertHydrogenToFuel(this);
    }
    update() {
    shipMovement(this);
    updateText(this);
    }
}