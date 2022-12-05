export default (getContext: any) => {
    // General
    getContext.load.image("player", "src/assets/ship.gif");

    // Backgrounds
    getContext.load.image("background", "src/assets/backgrounds/background.png");
    getContext.load.image("menuBackground", "src/assets/Backgrounds/menuBackground.png");
    getContext.load.image("factoryBackground", "src/assets/Backgrounds/factory_background.png");

    // UI
    getContext.load.image("homeButton", "src/assets/UI/homeButton.png");
    getContext.load.image("convert", "src/assets/UI/convert.png");
    
    // Logos 
    getContext.load.image("discord", "src/assets/Logos/discord-logo.png");
    getContext.load.image("factoryLogo", "src/assets/Logos/factory.png");

    //Planets
    getContext.load.image("earth", "src/assets/Planets/earth.png");
    getContext.load.image("venus", "src/assets/Planets/venus.png");
    getContext.load.image("sun", "src/assets/Planets/sun.png");
    getContext.load.image("mercury", "src/assets/Planets/mercury.png");
    getContext.load.image("mars", "src/assets/Planets/mars.png");
    getContext.load.image("jupiter", "src/assets/Planets/jupiter.png");
    getContext.load.image("saturn", "src/assets/Planets/saturn.png");
    getContext.load.image("uranus", "src/assets/Planets/uranus.png");
    getContext.load.image("neptune", "src/assets/Planets/neptune.png");

    //Keys
    getContext.load.image("increase", "src/assets/UI/keys/increase.png")
    getContext.load.image("turnLeft", "src/assets/UI/keys/turnLeft.png")
    getContext.load.image("turnRight", "src/assets/UI/keys/turnRight.png")
    getContext.load.image("brake", "src/assets/UI/keys/brake.png")
}

