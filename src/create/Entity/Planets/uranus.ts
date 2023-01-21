import Planet from "../planet";

export default (getContext: any) => {
    getContext.uranus = new Planet(getContext, "uranus", 400, 5000);

    getContext.uranus.on("pointerup", () => {
        if(Math.abs(getContext.getData.player_x - getContext.uranus.x) < 500 && Math.abs(getContext.getData.player_y - getContext.uranus.y) < 500) {
            console.log("Within Uranus")
        }
    })
}