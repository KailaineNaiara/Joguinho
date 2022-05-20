var carro_px = 300;
var carro_py = 300;
var cont = 20;
var pontos = 0;

 //cronometro
 let segundos = 0;
 let minutos = 0;
      
 function segundo(){
   //incrementa os segundos
   segundos++;
   if(segundos==60){
     //incrementa os minutos
     minutos++;
     //Zerar os segundos
     segundos=0;
     //escreve os minutos
     document.getElementById( 'minuto').innerHTML=minutos
   }
   //escreve os segundos
     document.getElementById('segundo').innerHTML=segundos

   }
   

   setInterval(function(){ segundo() },1000)
   setTimeout ( finish,60000);
   function finish(){
     alert("|👾                         𝕊𝔼𝕌 𝕋𝔼𝕄ℙ𝕆 𝔸ℂ𝔸𝔹𝕆𝕌                           👾|\n|🙀                              ⒼⒶⓂⒺ ⓄⓋⒺⓇ                               🙀|");
     clearTimeout();    
   }

   alert ( "   🅾🅻Á, 🆅🅰🅼🅾🆂 🅹🅾🅶🅰🆁    🕹️🕹️🕹️ ");
   var Nome = prompt ( "              🅼🅴 🅸🅽🅵🅾🆁🅼🅴 🅾 🅽🅾🅼🅴 🅳🅾 🅹🅾🅶🅰🅳🅾🆁   ");
 
   
function load() {
  document.addEventListener("keydown", tecla);
}

function novaMoeda() {
  var nMoeda = document.getElementById("moeda");

  nMoeda.style.top = Math.floor(Math.random() * 45) * 10 + 50 + "px";
  nMoeda.style.left = Math.floor(Math.random() * 49) * 10 + 10 + "px";
}

function tecla() {
  var jg = document.getElementById("jcarro");
  var moeda_pos = document.getElementById("moeda").getBoundingClientRect();

  var tecla = event.keyCode;

  if (tecla == 37 && carro_px > 10) {
    //Esquerda
    carro_px -= 10;
    document.getElementById("carro").src = "/Imagens/esquerda.gif";
    jg.style.left = carro_px + "px";
  }

  if (tecla == 39 && carro_px < 500) {
    //Direita
    carro_px += 10;
    document.getElementById("carro").src = "/Imagens/direita.gif";
    jg.style.left = carro_px + "px";
  }
  if (tecla == 38 && carro_py > 50) {
    //Cima
    carro_py -= 10;
    document.getElementById("carro").src = "/Imagens/cima.gif";
    jg.style.top = carro_py + "px";
    76;
  }

  if (tecla == 40 && carro_py < 500) {
    //baixo
    carro_py += 10;
    document.getElementById("carro").src = "/Imagens/baixo.gif";
    jg.style.top = carro_py + "px";
  }


 //Carro 50 x 50   
 //P1(carro_px,carro_py), P2(carro_px+50,carro_py), P3(carro_px,carro_py+50) e P4(carro_px+50,carro_py+50) são os pontos da extremidade do carrinho
// Estou deixando fixo o tamanho do carrinho com 50x50
// Exemplo:
// P1#######################P2
// #                         #
// #                         #
// #                         #
// #                         #
// #                         #
// #                         #
// P3#######################P4

 
  //Verificando P1
  if (
    carro_px >= moeda_pos.x &&
    carro_px <= moeda_pos.x + 50 &&
    carro_py >= moeda_pos.y &&
    carro_py <= moeda_pos.y + 50
  ) {
    pontos++;
    novaMoeda();
  }

  //Verificando P2
  if (
    carro_px + 50 >= moeda_pos.x &&
    carro_px + 50 <= moeda_pos.x + 50 &&
    carro_py >= moeda_pos.y &&
    carro_py <= moeda_pos.y + 50
  ) {
    pontos++;
    novaMoeda();
  }

  //Verificando P3
  if (
    carro_px >= moeda_pos.x &&
    carro_px <= moeda_pos.x + 50 &&
    carro_py + 50 >= moeda_pos.y &&
    carro_py + 50 <= moeda_pos.y + 50
  ) {
    pontos++;
    novaMoeda();
  }

  //Verificando P4
  if (
    carro_px + 50 >= moeda_pos.x &&
    carro_px + 50 <= moeda_pos.x + 50 &&
    carro_py + 50 >= moeda_pos.y &&
    carro_py + 50 <= moeda_pos.y + 50
  ) {
    pontos++;
    novaMoeda();
  }

  document.getElementById("tcl").innerHTML = "Código Tecla = " + tecla +" Posição x = "  + carro_px +"   Posição y = " + carro_py + "    Pontos = " + pontos + "<br>" + "      Nome do (a) jogador (a) : " + Nome;
}
window.addEventListener("load", load);
