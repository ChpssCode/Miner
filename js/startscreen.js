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
    this.add.tileSprite(window.innerWidth / 2 , window.innerHeight / 2, window.innerWidth, window.innerHeight, "background");
    this.add.text(window.innerWidth / 7, window.innerHeight / 3, "Miner is a 2D Idle Game\nwere you goal is to farm planets\nresources in exchange for in-game\ncurrency. the more resources you\nget, the farther you can expand \nyour economic emprire! ", { fontFamily: "'Open Sans', sans-serif, 'Orbitron', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace"}).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
    this.add.text(window.innerWidth / 1.3, window.innerHeight / 3, "Miner Changelog: v0.1.0 \n Bug Fixes: \n - Fixed Vercel Link \n - Fixed Localstorage not being  \n able to store Data on Vercel site \n \n New Features: \n - Added Copyright, Credits, and  \nSpecial Thanks \n - Added Startscreen Music \n \n Next Update Plans: \n - Save location on Map when closing Tab \n Add 2 More Planets(Will detail  \n resources of each in next update) \n - Automatic Planet Miners", { fontFamily: "'Open Sans', sans-serif, 'Orbitron', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace"}).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
    this.add.text(0, 0, "© 2022 Miner Game, All rights reserved. \n Game by Chpsterz#0001 \n Special Thanks to Nomo#7330", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace"}).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
    this.add.text(0, window.innerHeight / 1.2, "How to Play: \n \n Left Click: Mine/Click \n W/S: Accelerate/Deccelerate \n A/D: Left/Right \n F: Factory \n ESC: Game Menu", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace"}).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
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