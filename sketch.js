const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var ground
var rope
var fruit_con
var bgImg
var coelhoImg
var coelho
function preload(){
  bgImg= loadImage("background.png")
  coelhoImg = loadImage("Rabbit-01.png")
  fruitImg = loadImage("melon.png")
}


function setup() 
{
  createCanvas(500,700);
  imageMode(CENTER)
  coelho = createSprite(250,610,40,40)
  coelho.addImage(coelhoImg)
  coelho.scale =0.3
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(200,690,600,20)
 rope = new Rope(6,{x:245,y:30})
 var fruitOptions ={
  density:0.001

 }
  fruit = Bodies.circle(300,300,15,fruitOptions)
  Composite.add(rope.body, fruit)

  fruit_con= new Link(rope,fruit)

  button = createImg("cut_btn.png")
  button.position(220, 30)
button.size(50, 50)
button.mouseClicked(drop)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
image(bgImg,  width/2, height/2 ,500, 700)
  
  Engine.update(engine);
ground.show()
rope.show()
image(fruitImg, fruit.position.x, fruit.position.y,60,60)  
drawSprites()


}

function drop(){
rope.break()
  fruit_con.corta()
  fruit_con = null

}