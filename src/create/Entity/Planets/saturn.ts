import Planet from "../planet";

export default (getContext: any) => {
    getContext.saturn = new Planet(getContext, "saturn", 5250, 3000);

     getContext.saturn.on("pointerup", () => {

    })
}