export default (getContext: any) => {
    let factoryVisibility = false
    getContext.menuBackground = getContext.add.image(window.innerWidth / 2, window.innerHeight / 2, "factoryBackground").setScrollFactor(0).setScale(2.3).setDepth(5).setVisible(factoryVisibility);
     getContext.input.keyboard.on("keydown-F", () => {
        if(factoryVisibility === false) {
                console.log("Opened Factory UI");
                factoryVisibility = true;
                getContext.menuBackground.setVisible(factoryVisibility)
        }
        else if(factoryVisibility === true) {
            console.log("Closed Factory UI");
            factoryVisibility = false;
            getContext.menuBackground.setVisible(factoryVisibility)
        }
    })
}

