import Planet from "../planet";

export default (getContext: any) => {
    getContext.mercury = new Planet(getContext, "mercury", 2625, 3000);

    getContext.mercury.on("pointerup", () => {
        getContext.getData.iron++;
    })
}