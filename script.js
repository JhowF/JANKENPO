button = document.querySelector('#buttonPress')


function Start(){
 
let audio = document.querySelector('#audio')
audio.setAttribute('src', 'https://www.youtube.com/watch?v=CYDP_8UTAus&list=RDWzQBAc8i73E&index=21');
audio.play()
console.log(audio)
  
  
Player_1 = document.querySelector('#player_1');
ply_1 = Player_1.value;
ply_1 = (ply_1.toUpperCase());
console.log(ply_1)

Player_2 = document.querySelector('#player_2');
ply_2 = Player_2.value;
ply_2 = (ply_2.toUpperCase());
console.log(ply_2)
  
  
if (ply_1 === 'TESOURA' || ply_1 === 'PEDRA' || ply_1 === 'PAPEL' && ply_2 === 'TESOURA' || ply_2 === 'PEDRA' || ply_2 === 'PAPEL' ){

switch(ply_1){
  case "PEDRA":
    switch(ply_2){
      case "PEDRA":
        alert("JOGADORES EMPATADOS")
    }
    switch(ply_2){
      case "PAPEL":
        alert("JOGADOR 2 GANHOU")
    } 
    switch(ply_2){
      case "TESOURA":
        alert("JOGADOR 1 GANHOU")
    } 
}
switch(ply_1){
  case "PAPEL":
    switch(ply_2){
      case "PAPEL":
        alert("JOGADORES EMPATADOS")
    }
    switch(ply_2){
      case "TESOURA":
        alert("JOGADOR 2 GANHOU")
    } 
    switch(ply_2){
      case "PEDRA":
        alert("JOGADOR 1 GANHOU")
    } 
    
}

switch(ply_1){
  case "TESOURA":
    switch(ply_2){
      case "TESOURA":
        alert("JOGADORES EMPATADOS")
    }
    switch(ply_2){
      case "PEDRA":
        alert("JOGADOR 2 GANHOU")
    } 
    switch(ply_2){
      case "PAPEL":
        alert("JOGADOR 1 GANHOU")
    } 
}
}else{
  alert(`Player 1: digitou "${ply_1}" :
Player 2: digitou "${ply_2}" :
Digite somente ('Pedra, Papel, ou Tesoura')`)
}
  
document.querySelector('#player_1').value = ''
document.querySelector('#player_2').value = ''



}



button.addEventListener('click',Start)

Player_1 = document.querySelector('#player_1');


function tira(){
    Player_1 = document.querySelector('#player_1');
    Player_1.setAttribute('display:none')
}

Player_1.addEventListener('mouseout', tira);