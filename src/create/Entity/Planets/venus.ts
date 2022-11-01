import Planet  from "../planet";

export default (getContext: any) => {
    getContext.venus = new Planet(getContext, "venus", 3750, 3000);

    getContext.venus.on("pointerup", () => {
      
    })
}