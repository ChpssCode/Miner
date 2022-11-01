import Planet from "../planet";

export default (getContext: any) => {
    getContext.jupiter = new Planet(getContext, "jupiter", 1225, 1500);

    getContext.jupiter.on("pointerup", () => {
          console.log("Clicked Jupiter");
    })
}