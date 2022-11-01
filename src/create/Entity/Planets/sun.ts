import Planet from "../planet";

export default (getContext: any) => {
    getContext.sun = new Planet(getContext, "sun", 3000, 3000);

    getContext.sun.on("pointerup", () => {
      
    })
}