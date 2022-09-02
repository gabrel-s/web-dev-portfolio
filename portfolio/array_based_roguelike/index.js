let x_axis = Math.floor((Math.random() * 40) + 3);
let y_axis = Math.floor((Math.random() * 30) + 10);

//Não estou usando os arrays... por quê?
let x_world = new Array(x_axis);
let y_world = new Array(y_axis);
const world = [];
function makeSquare(){
    for(let y=0;y<y_axis;y++){
	for(let x=0;x<x_axis;x++){
	    world.push("#");
	}
	document.write(world);
    }
    document.write("<br/>");
}
//CONTROLES
document.addEventListener('keydown', function(event){
    if(event.keyCode == 37){}
    if(event.keyCode == 38){}
    if(event.keyCode == 39){}
    if(event.keyCode == 40){}
}, true);
makeSquare();
console.log(`${x_axis},${y_axis}`);

/*
var world = new Array(45);//create a 45 element array

for(var i=0;i<world.length;i++){
  document.write('Item: ' + (i+1) + ' of ' + world.length + '<br/>'); 
}

let x_axis = Math.floor((Math.random() * 40) + 3);
let y_axis = Math.floor((Math.random() * 30) + 10);

//Não estou usando os arrays... por quê?
let x_world = new Array(x_axis);
let y_world = new Array(y_axis);
function makeSquare(){
    for(let y=0;y<y_axis;y++){
	for(let x=0;x<x_axis;x++){
	    document.write('  #  ');
	}
	document.write('<br/>');
    }
}
//CONTROLES
document.addEventListener('keydown', function(event){
    if(event.keyCode == 37){})}
    if(event.keyCode == 38){}
    if(event.keyCode == 39){}
    if(event.keyCode == 40){}
}, true);
//makeSquare();
console.log(`${x_axis},${y_axis}`);

*/
