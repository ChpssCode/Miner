export default (getContext) => {
     getContext.input.setDefaultCursor('url(assets/Cursor.png), pointer');
     getContext.physics.world.setBounds(0, 0, 4000, 4000, true, true, true, true)
     getContext.background = getContext.add.tileSprite(2000, 2000, 4000, 4000, "background");
} 
    
