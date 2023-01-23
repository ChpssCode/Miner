export default class Planet {
    constructor(getContext: any, planetName: String, planetX: Number, planetY: Number) {
      let scale: Number;
       if(planetName === "earth") {
         scale = 0.5;
       }
       else if(planetName === "mercury") {
         scale = 0.38;
      }
      else if(planetName === "mars") {
        scale = 0.53;
      }
      else if(planetName === "sun") {
        scale = 4;
      }
      else if(planetName === "uranus") {
        scale = 1.8;
      }
      else if(planetName === "neptune") {
        scale = 2;
      }
      else if(planetName === "jupiter") {
        scale = 3;
      }
      else if(planetName === "saturn") {
        scale = 2.5;
      }
       else if(planetName === "venus") {
        scale = 1.95;
      }
      else {
        scale = 1;
      }
        return getContext.physics.add.image(planetX, planetY, planetName).setScale(scale).setDepth(2).setInteractive();
    }
}
