//Variáveis da bolinhas
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//Variáveis Velocidade X e Y
let VelocidadeX = 6;
let VelocidadeY = 6;

//Variáveis Raquete1
let xRaquete1 = 3;
let yRaquete1 = 160;
let xEspessura = 5;
let yAltura = 80;

//Variáveis Raquete2
let xRaquete2 = 592;
let yRaquete2 = 160;
let VelocidadeR2;
let Erro = 0;

//Variável de Colisão
let colisao = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(70, 180, 50);
  Linha();
  Bolinha();
  Velocidade();
  ColisaoBorda();
  Raquete1();
  Raquete2();
  MoveRaquete1();
  MoveRaquete2();
  ColideRaquete(xRaquete1,yRaquete1);
  ColideRaquete(xRaquete2,yRaquete2);
}

function Linha() {
  stroke(255);
  strokeWeight(3);
  line(width/2, 0, width/2, height);
}

function Bolinha() {
  stroke(255, 255, 0);
  fill(255, 255, 0);
  circle(xBolinha, yBolinha, diametro);
}

function Velocidade() {
  xBolinha += VelocidadeX;
  yBolinha += VelocidadeY;
}

function ColisaoBorda() {
  if (xBolinha + raio > width || xBolinha < raio) {
    VelocidadeX *= -1;
  }
  if (yBolinha + raio > height || yBolinha < raio) {
    VelocidadeY *= -1;
  }
}

function Raquete1() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  rect(xRaquete1, yRaquete1, xEspessura, yAltura);
}

function Raquete2() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  rect(xRaquete2, yRaquete2, xEspessura, yAltura);
}

function MoveRaquete1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete1 -= 7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete1 += 7;
  }
}

function MoveRaquete2() {
  VelocidadeR2 = yBolinha - yRaquete2 - yAltura/2 + Erro;
  yRaquete2 += VelocidadeR2;
  Erro -= random(-2,2);
  if (Erro > 110 || Erro < -110) {
    Erro = 0;
  }
}

//function ColisaoR1() {
//  if (xBolinha - raio < xRaquete1 + xEspessura && //yBolinha - raio < yRaquete1 + yAltura && yBolinha > //yRaquete1) {
//    VelocidadeX *= -1;
//  }
//}

//function ColisaoR2() {
//  if (xBolinha - raio < xRaquete2 + xEspessura && //yBolinha - raio < yRaquete2 + yAltura && yBolinha > //yRaquete2) {
//    VelocidadeX *= -1;
//  }
//}

function ColideRaquete(m,n) {
  colisao = collideRectCircle(m, n, xEspessura, yAltura, xBolinha, yBolinha, diametro);
  if (colisao) {
    VelocidadeX *= -1;
  }
}