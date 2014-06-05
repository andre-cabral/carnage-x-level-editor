var arrayImagens = new Array();
var arrayCodigos = new Array();

var game = {
  addAsset: function(img, cod) {
    arrayImagens.push(img);
    arrayCodigos.push(cod);
  }
};
    
game.addAsset('sprites/level/sideWalk.png', 'w');
game.addAsset('sprites/level/grass.png', 'gr');

game.addAsset('sprites/level/roadH.png', 'rh');
game.addAsset('sprites/level/roadV.png', 'rv');
game.addAsset('sprites/level/roadUpLeft.png', 'rul');
game.addAsset('sprites/level/roadUpRight.png', 'rur');
game.addAsset('sprites/level/roadRightDown.png', 'rrd');
game.addAsset('sprites/level/roadDownLeft.png', 'rdl');
game.addAsset('sprites/level/roadTDown.png', 'rtd');
game.addAsset('sprites/level/roadTLeft.png', 'rtl');
game.addAsset('sprites/level/roadTUp.png', 'rtu');
game.addAsset('sprites/level/roadTRight.png', 'rtr');
game.addAsset('sprites/level/roadCross.png', 'rc');

game.addAsset('sprites/level/guardSouth.png', 'gS');
game.addAsset('sprites/level/guardNorth.png', 'gN');
game.addAsset('sprites/level/guardWest.png', 'gE');
game.addAsset('sprites/level/guardEast.png', 'gW');

game.addAsset('sprites/level/guardSouthWestCorner.png', 'gSWc');
game.addAsset('sprites/level/guardNorthWestCorner.png', 'gNWc');
game.addAsset('sprites/level/guardNorthEastCorner.png', 'gNEc');
game.addAsset('sprites/level/guardSouthEastCorner.png', 'gSEc');

game.addAsset('sprites/level/guardNorthEast.png', 'gNE');
game.addAsset('sprites/level/guardNorthWest.png', 'gNW');
game.addAsset('sprites/level/guardSouthEast.png', 'gSE');
game.addAsset('sprites/level/guardSouthWest.png', 'gSW');

game.addAsset('sprites/level/guardH.png', 'gH');
game.addAsset('sprites/level/guardHWest.png', 'gHW');
game.addAsset('sprites/level/guardHEast.png', 'gHE');

game.addAsset('sprites/level/guardV.png', 'gV');
game.addAsset('sprites/level/guardVSouth.png', 'gVS');
game.addAsset('sprites/level/guardVNorth.png', 'gVN');

game.addAsset('sprites/level/guardBox.png', 'gBX');



var html = "";
for(var i=0; i<arrayCodigos.length; i++){
    html += '<div class="icone icone-selecao icone-'+arrayCodigos[i]+'">'+arrayCodigos[i]+'</div>\n';
}
var css = "";
for(var i=0; i<arrayCodigos.length; i++){
    css += ".icone-"+arrayCodigos[i]+"{background:url('"+arrayImagens[i]+"') 0 0 transparent}\n";
}

console.log("HTML\n\n"+html);
console.log("\n\n---------------\n\n");
console.log("CSS\n\n"+css);