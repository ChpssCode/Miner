import Planet from "../planet";

export default (getContext: any) => {
    getContext.neptune = new Planet(getContext, "neptune", 300, 5700);

    getContext.neptune.on("pointerup", () => {

    })
}