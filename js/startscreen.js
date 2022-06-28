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
    this.load.image("play", "assets/play.png");
    this.load.audio('theme', 'assets/bg_music.ogg');
    }

    create() {
    this.add.tileSprite(1000, 1000, 2000, 2000, "background");
    this.add.text(window.innerWidth / 7, window.innerHeight / 3, "Miner is a 2D Idle Game\nwere you goal is to farm planets\nresources in exchange for in-game\ncurrency. the more resources you\nget, the farther you can expand \nyour economic emprire! ", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace"}).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
    this.logo = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 2.5, "logo").setScale(1.4).setDepth(3);                                       
    this.play = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 1.7, "play").setScale(1);
    this.theme = this.sound.add('theme');
    this.theme.play()
    this.play.setInteractive();
    this.play.on("pointerup", () => { 
        this.scene.start('Game') 
        this.theme.stop();
      } )
    }
    update() {
        this.logo.setPosition(window.innerWidth / 2, window.innerHeight / 2.5)
        this.play.setPosition(window.innerWidth / 2, window.innerHeight / 1.7)
    }
}