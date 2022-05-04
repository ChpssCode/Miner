class Startscreen extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: "Startscreen"
        });
    }

    preload() {
    this.load.image("background", "assets/background.png")
    this.load.image("logo", "assets/logo.png");
    }

    create() {
    this.logo = this.physics.add.image(955, 450, "logo")
    this.add.tileSprite(1000, 0, 2000, 2000, "background");;

    this.logo.setInteractive();
    this.logo.on("pointerup", () => this.scene.start('Game') )
    }
    update() {

    }
}