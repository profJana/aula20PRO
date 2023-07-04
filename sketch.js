
//1 parte
const Engine = Matter.Engine; //referenciando Engine da biblioteca Matter, para usar motor de física
const World = Matter.World; //referenciando World da biblioteca Matter, para criar novos mundos
const Bodies = Matter.Bodies; //referenciando Bodies, para criar novos objetos que habitam o mundo
const Body = Matter.Body; //referenciando Body, para criar formatos

//2 parte
//variáveis que serão usadas ao longo do programa
let engine;
let world;
var ball;
var ground;
var rock;

function setup() {

  // 3 parte
  createCanvas(400, 400); //criando a tela
  engine = Engine.create(); //criando o motor de física
  world = engine.world; //criando um novo mundo
  var ball_options = { //criando propriedades para a bola
    restitution: 0.95, //elasticidade da bola, o quanto pula
    frictionAir: 0.01 // atrituto com o ar, altera a velocidade
  }

  //7 parte
  var ground_options = { //criando propriedades do chão
    isStatic: true //estático como verdadeiro
  };

  var rock_options = {
    restitution: 0.85,

  }


  //4 parte
  ball = Bodies.circle(100, 10, 20, ball_options); //criando o corpo do tipo circulo, posicao x 100, y 10, raio 20 com as propriedades de fisica
  World.add(world, ball); //adicionando a bola ao mundo

  //8 parte
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options); //criando o corpo do tipo retangulo para o chao, posicao x 200, y 390, 400 de largura, 20 de altura com a física criada
  World.add(world, ground); //adicionando o chao ao mundo

  wall = Bodies.rectangle(300, 200, 200, 20, ground_options);
  World.add(world, wall);

  rock = Bodies.circle(250, 10, 20, rock_options);
  World.add(world, rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  //5 parte
  background(51); //cor de fundo
  Engine.update(engine); //atualizando o motor de fisica a cada quadro

  //6 parte
  ellipse(ball.position.x, ball.position.y, 20); //desenhando na tela o circulo

  //9 parte
  rect(ground.position.x, ground.position.y, 400, 20); //desenhando o chao na tela

  
  ellipse(rock.position.x, rock.position.y, 20);
  rect(wall.position.x, wall.position.y, 200, 20);

}

