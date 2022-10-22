import 'phaser';

import World from "./world";
import CreateKeys from "./keys"

import Preload from "./preload/preload"

import Player from "./create/Entity/player";

import planets from './create/Entity/planets';

import Factory from "./create/UI/factory";
import PauseMenu from "./create/UI/pausemenu";
import Stats from "./create/UI/stats";

import Player_Update from "./update/Entity/player";

import Stats_Update from "./update/UI/stats";

export class Game extends Phaser.Scene
{
    getData: any;
    speedText = String;
    waterText = String;
    fuelText = String;
    StaticInts = {
          playerDepth: 3,
          planetDepth: 2,
    };
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        Preload(this);
    }

    create()
    {
        if (!localStorage.getItem("gameData")) {
            localStorage.setItem("gameData", JSON.stringify({ 'oxygen': 0, 'hydrogen': 0, 'water': 0, 'fuel': 10000, 'counter': 0, 'player_x': 3000, 'player_y': 1650 }));
        }
        this.getData = Object.assign({}, JSON.parse(localStorage.getItem("gameData") || '{}'));
        setInterval(
            () => { localStorage.setItem("gameData", JSON.stringify(this.getData)) }
            , 1000);  
    PauseMenu(this);
    Stats(this);

    World(this); 
    CreateKeys(this);

    Player(this);
    planets(this);
    Factory(this);
     }

    update () {
      Player_Update(this); 
      Stats_Update(this);
    }
}
class Startscreen extends Phaser.Scene {
    logo: any;
    play: any;
    theme: any;
    discord: any;
    constructor() {
        super({
            key: "Startscreen"
        });
    }

    preload() {
        this.load.image("background", "assets/Backgrounds/background.png")
        this.load.image("logo", "assets/Logos/logo_full.png");
        this.load.image("discord", "assets/Logos/discord-logo.png");
        this.load.image("play", "assets/UI/play.png");
        this.load.audio('theme', 'assets/bg_music.mp3');
    }

    create() {
        this.add.tileSprite(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight, "background");
        this.add.text(window.innerWidth / 7, window.innerHeight / 3, "Miner is a 2D Idle Game\nwere you goal is to farm planets\nresources in exchange for in-game\ncurrency. the more resources you\nget, the farther you can expand \nyour economic emprire! ", { fontFamily: "'Open Sans', sans-serif, 'Orbitron', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.add.text(window.innerWidth / 1.3, window.innerHeight / 3, "Miner Changelog: v0.1.5 \n New Features: \n - Added How to Play \n - Added the ability to save \n your location on the map \n automatically when close the \n tab \n - Increased Map Size from \n 2000x2000 to 4000x4000 \n - Added Dimidium \n \n Next Update Plans: \n - Auto Miners/Upgrades \n - (Internal) Refactor Code Base  \n resources of each in next update) \n - Metals from Dimidium \n - Ability to check planet info", { fontFamily: "'Open Sans', sans-serif, 'Orbitron', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.add.text(0, 0, "© 2022 Miner Game, All rights reserved. \n Game by Chpsterz#0001 \n Special Thanks to Nomo#7330", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.add.text(0, window.innerHeight / 1.2, "How to Play: \n \n Left Click: Mine/Click \n W/S: Accelerate/Deccelerate \n A/D: Left/Right \n F: Factory \n ESC: Game Menu", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.logo = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 2.5, "logo").setScale(1.4).setDepth(3);
        this.play = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 1.7, "play").setScale(1);
        this.discord = this.add.image(1850, window.innerHeight / 1.06, "discord").setScale(0.3).setInteractive();
        this.discord.on("pointerup", () => {
            window.open('https://discord.com/invite/5PfQSmsT2w', '_blank');
        })
        this.theme = this.sound.add('theme');
        this.theme.play()
        this.play.setInteractive();
        this.play.on("pointerup", () => {
            this.scene.start('Game')
            this.theme.stop();
        })
    }
    update() {
        this.logo.setPosition(window.innerWidth / 2, window.innerHeight / 2.5)
        this.play.setPosition(window.innerWidth / 2, window.innerHeight / 1.7)
    }
}

const game_config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scaleMode: Phaser.Scale.RESIZE,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: [ Startscreen, Game ]
};

const GameClient = new Phaser.Game(game_config);