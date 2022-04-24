//Config
var config = {
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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//Global Variables
let ship; 
let keys;
let background;
let terra;
let resources = {
        water: 0
};
let text = {};
let camera;
let graphics = this.add.graphics();

function preload() {
    //Load Images(Sprites)
    this.load.image("ship", "assets/ship.gif");
    this.load.image("background", "assets/background.png");
    this.load.image("terra", "assets/Terra.png")
}

function create() {
    //Add Objects(Sprites)
    ship = this.physics.add.image(0, 0, 'ship').setScale(0.3).setDepth(3);
    terra = this.physics.add.image(500,700, 'terra').setScale(0.3).setDepth(2);
    background = this.add.tileSprite(1000, 1000, 2000, 2000, "background");;

    
    //Set camera to follow Ship object
    camera = this.cameras.main.startFollow(ship);

   //Set World Boundaries
   this.physics.world.setBounds(0,0, 2000, 2000, true, true, true, true)
   ship.body.collideWorldBounds=true;

   //Ship Physics
   ship.setDamping(true);
   ship.setDrag(1);
   ship.setMaxVelocity(200);

   text.speed = this.add.text(32, 32).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
   text.water = this.add.text(32, 48).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
   
   //Input Keys
   keys = {
       "W": this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
       "A": this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
       "S": this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
       "D": this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
   };

   /*
   this.input.keyboard.on('keydown-E', () => {
            text.water.setVisible(false);
            text.speed.setVisible(false); 
  });
  */
   

   terra.setInteractive();
   terra.on("pointerup", () => {
       resources.water += 1;
   })
}


function update() {
//Ship movement
if (keys.W.isDown)
    {
        this.physics.velocityFromRotation(ship.rotation, 200, ship.body.acceleration);
    }
    else
    {
        ship.setAcceleration(0);
    }

    if (keys.A.isDown)
    {
        ship.setAngularVelocity(-300);
    }
    else if (keys.D.isDown)
    {
        ship.setAngularVelocity(300);
    }
    else
    {
        ship.setAngularVelocity(0);
    }

    text.speed.setText('Speed: ' + ship.body.speed);
    text.water.setText('Water: ' + resources.water);
}
