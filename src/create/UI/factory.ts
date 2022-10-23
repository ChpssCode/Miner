export default (getContext: any) => {
    getContext.factoryVisibility = false;
    getContext.factory = getContext.add.group()
    getContext.factoryBackground = getContext.add.image(window.innerWidth / 2, window.innerHeight / 2, "factoryBackground").setScrollFactor(0).setScale(2.3).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.factoryLogo = getContext.add.image(window.innerWidth / 2, window.innerHeight / 6,"factoryLogo").setScrollFactor(0).setScale(1).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.slot1 = getContext.add.image(window.innerWidth / 1.85, window.innerHeight / 3,"convert").setScrollFactor(0).setScale(0.5).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.slot1.setInteractive();
    getContext.slot2 = getContext.add.image(window.innerWidth / 1.85, window.innerHeight / 2,"convert").setScrollFactor(0).setScale(0.5).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.slot2.setInteractive();
    getContext.WaterToHydrogenAndOxygen = getContext.add.text(window.innerWidth / 4.5, window.innerHeight / 3, "Object Text").setScrollFactor(0).setDepth(5).setFontSize(20).setColor('#000000')
    getContext.HydrogenToFuel = getContext.add.text(window.innerWidth / 4.5, window.innerHeight / 2, "Object Text").setScrollFactor(0).setDepth(5).setFontSize(20).setColor('#000000')
    getContext.factory.add(getContext.WaterToHydrogenAndOxygen);
    getContext.factory.add(getContext.factoryBackground)
    getContext.factory.add(getContext.factoryLogo)
    getContext.factory.add(getContext.slot1)
    getContext.factory.add(getContext.slot2)
    getContext.input.keyboard.on("keydown-F", () => {
        if(getContext.factoryVisibility === false) {
                console.log("Opened Factory UI");
                getContext.factoryVisibility = true;
                getContext.factory.setVisible(getContext.factoryVisibility)
        }
        else if(getContext.factoryVisibility === true) {
            console.log("Closed Factory UI");
            getContext.factoryVisibility = false;
            getContext.factory.setVisible(getContext.factoryVisibility)
        }
    })
    getContext.slot1.on("pointerup", () => {
        getContext.getData.water--;
        getContext.getData.hydrogen += 2;
        getContext.getData.oxygen++;
    })
    getContext.slot2.on("pointerup", () => {
        getContext.getData.hydrogen--;
        getContext.getData.fuel += 0.5;
    })
}


