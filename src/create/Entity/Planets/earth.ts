import Planet from "../planet";

export default (getContext: any) => {
    getContext.earth = new Planet(getContext, "earth", 3000, 1700);

    getContext.earth.on("pointerup", () => {
        getContext.getData.water++;
    })
}

