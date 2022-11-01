import Planet from "../planet";

export default (getContext: any) => {
    getContext.mars = new Planet(getContext, "mars", 1650, 3000);

    getContext.mars.on("pointerup", () => {

    })
}