export default class Planet {
    constructor(getContext: any, planetName: String, planetX: Number, planetY: Number) {
      let scale: Number;
       if(planetName === "earth") {
         scale = 0.3;
       }
       else {
         scale = 1;
        }
         return getContext.physics.add.image(planetX, planetY, planetName).setScale(scale).setDepth(2).setInteractive();
    }
}
