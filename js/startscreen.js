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
    this.load.image("play", "assets/play.png")
    }

    create() {
    this.logo = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 2.5, "logo").setScale(1.4).setDepth(3);
    this.play = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 1.7, "play").setScale(1);
    this.add.tileSprite(window.innerWidth / 2, 0, 7000, 7000, "background");

    this.play.setInteractive();
    this.play.on("pointerup", () => this.scene.start('Game') )
    }
    update() {
        this.logo.setPosition(window.innerWidth / 2, window.innerHeight / 2.5)
        this.play.setPosition(window.innerWidth / 2, window.innerHeight / 1.7)
    }
}