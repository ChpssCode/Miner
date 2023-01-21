import Planet from "../planet";

export default (getContext: any) => {
    getContext.saturn = new Planet(getContext, "saturn", 9000, 5000);

     getContext.saturn.on("pointerup", () => {
     if(Math.abs(getContext.getData.player_x - getContext.saturn.x) < 500 && Math.abs(getContext.getData.player_y - getContext.saturn.y) < 500) {
            console.log("Within Saturn");
            getContext.getData.hydrogen++;
        }
    })
}