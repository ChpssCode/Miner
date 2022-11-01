import Planet from "../planet";

export default (getContext: any) => {
    getContext.uranus = new Planet(getContext, "uranus", 5626, 1250);

    getContext.uranus.on("pointerup", () => {

    })
}