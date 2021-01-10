var ball;
var database;
var position,player,form,game;
var gameState=0;
var playercount=0;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
 game=new Game();
 game.getState();
 game.start(); 
}

function draw(){
    background("white");
  
}


