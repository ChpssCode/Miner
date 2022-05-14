class Game extends Phaser.Scene
{   

    constructor ()
    {
        super({
            key: "Game"
        });
        this.last = Date.now()
    }

    preload() {
    preloadImages(this);
    }

    create() {
    //Set Physics
    this.physics.world.setBounds(0,0, 2000, 2000, true, true, true, true)

    //Set Variables
    this.water = 0;

    //Add Objects(Sprites)
    createBackground(this);
    createShip(this);
    createShopButton(this);
    createTerra(this);
    
    createKeys(this);

    this.speed = this.add.text(32, 32).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    this.keysText = this.add.text(32, 64).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    this.waterText = this.add.text(32, 48).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    this.counter = 0;

    }
    update() {
    shipMovement(this);
    this.speed.setText('Speed: ' + this.ship.body.speed);
    }
}