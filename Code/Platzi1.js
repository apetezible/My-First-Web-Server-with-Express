var Cuadro = document.getElementById("ZonaMapa");
var Papel = Cuadro.getContext("2d");
var Vaca = {url: "vaca.png", CargaOK: false};
var Cerdo = {url: "cerdo.png", CargaOK: false};
var Pollo = {url: "pollo.png", CargaOK: false};
var Fondo = {url: "tile.png", CargaOK: false};
var Teclas = document.addEventListener("keydown",flechasDelTeclado);
var ASCIs = {UP: 38, DOWN: 40, LEFT: 37, RIGHT:39};
var XC = 0;
var YC = 0;
var Rebano = aleatorio(0,11);
var Vacas = new Array(Rebano);
var Bobino = {x: 0, y: 0};
var Primero = false;


Fondo.objeto = new Image();
Fondo.objeto.src = Fondo.url;
Fondo.objeto.addEventListener ("load", cargarMapa);

Vaca.objeto = new Image();
Vaca.objeto.src = Vaca.url;
Vaca.objeto.addEventListener ("load", cargarVaca);

Cerdo.objeto = new Image();
Cerdo.objeto.src = Cerdo.url;
Cerdo.objeto.addEventListener ("load", cargarCerdo);

function flechasDelTeclado (evento){
  switch (evento.keyCode) {
    case ASCIs.UP:
      movimentoCerdo();
      YC = YC-11;
      break;
    case ASCIs.DOWN:
      movimentoCerdo();
      YC = YC+11;
      break;
    case ASCIs.RIGHT:
      movimentoCerdo();
      XC = XC+11;
      break;
    case ASCIs.LEFT:
      movimentoCerdo();
      XC = XC-11;
      break;
    default:

  }
}

function cargarMapa (){
  Fondo.CargaOK = true;
}

function cargarVaca (){
  Vaca.CargaOK = true;
  dibujar();
}

function cargarCerdo (){
  Cerdo.CargaOK = true;
}

function dibujar (){
   console.log ("q");
    if(Vaca.CargaOK){
    for (var v = 0; v < Rebano; v++){
            var X = aleatorio(0, 7);
            var Y = aleatorio(0, 7);
            X = X*60;
            Y = Y*60;
            Bobino.x = X;
            Bobino.y = Y;
            Vacas[v]=Bobino;
            Papel.drawImage(Vaca.objeto, Vacas[v].x, Vacas[v].y);
           }
         }
      return Vacas;
    }


function movimentoCerdo(){
  console.log(Vacas[1]);
  console.log(Vacas[2]);
      if (Vaca.CargaOK){
        if(Cerdo.CargaOK){
          Papel.drawImage(Fondo.objeto, 0, 0);
          dibujar();
          Papel.drawImage(Cerdo.objeto, XC, YC);
        }
      }
}


function aleatorio(Max, Min){
  var Resultado;
  Resultado = Math.floor (Math.random()*(Max - Min + 1)) + Min;
  return Resultado;
}
