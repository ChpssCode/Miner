export default (getContext: any) => {
     getContext.input.setDefaultCursor('url(assets/Cursor.png), pointer');
     getContext.physics.world.setBounds(0, 0, 10000, 10000, true, true, true, true)
     getContext.background = getContext.add.tileSprite(5000, 5000, 10000, 10000, "background");
} 
    
