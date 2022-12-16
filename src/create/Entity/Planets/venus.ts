import Planet  from "../planet";

export default (getContext: any) => {
    getContext.venus = new Planet(getContext, "venus", 4000, 3000);

    getContext.venus.on("pointerup", () => {
      
    })
}