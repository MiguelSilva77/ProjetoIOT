// variáveis que determina a temperatura e tempo inicial do equipamento
let temperatura = document.getElementById("temperatura");
let tempoInput = document.getElementById("time");
temperatura.value = 0;
tempoInput.value = "00:00";

let segundos = 0;
let intervaloTemp = null;

//função que determina se o botão está ligado ou desigado
const liga = document.getElementById("liga")
let clicado = false;
liga.addEventListener("click", function() {
   if (clicado === false) {
       temperatura.value = 180;
       segundos = 25 * 60; 
       iniciarTimer();
       atualizar();
       clicado = true;
       liga.value ="desligar"
   } else {
      temperatura.value = 0;
      segundos = 0;
      clearInterval(intervaloTemp);
      atualizar();
      clicado = false;
      liga.value ="ligar"

   }
});

// função que determina se o botão está clicado ou não
const botao1 = document.getElementById("btemp");
let clicado1 = false;
botao1.addEventListener("click", function(){
 if(clicado1 == false){
    adicionarTemp();
    clicado1 = true;
 }else{
    deletar();
    clicado1 = false;
 }
})


// função que cria dois adiciona os botões controladores de temperatura 
function adicionarTemp(){

    temp.innerHTML += '<id id="temp1"></id>'
    temp1.innerHTML+='<input id="btemp+" type="button" value="temp+" max="350" onClick=temperatura.value++,tempMais()>'; 
    temp1.innerHTML+='<input id="btemp-" type="button" value="temp-" min="100" onClick=temperatura.value--,tempMenos()>';
 

}

// função que deleta os botões controladores de temperatura
function deletar(){
    let del = document.getElementById("temp1");
    del.remove();



}
//  função para aumentar a temperatura 
function tempMais(){
   var botao = document.getElementById("btemp+");
   let temperatura = document.getElementById("temperatura");
   var intervalo ;
   const temMax = 350;
   const temMin = 100;
   
   botao.addEventListener("mousedown",function(){
    intervalo = setInterval(function() {
     let tempAtual =  parseInt(temperatura.value);
     let tempNovo = tempAtual + 1;
     if(tempNovo <= temMax){  
      //if que se a temperatura está dentro dos valores máximos e minimos
       temperatura.value = tempNovo;
     }else{
        temperatura.value = temMax;
        // else impedindo que o valor máximo seja ultrapassado
     }
    }, 150)
   })
   botao.addEventListener("mouseup",function(){
    clearInterval(intervalo);
    intervalo = null;
   })
}
// função para diminuir a temperatura
function tempMenos(){
    var botao = document.getElementById("btemp-");
    let temperatura = document.getElementById("temperatura");
    var intervalo ;
    const temMax = 350;
    const temMin = 100;
    
    botao.addEventListener("mousedown",function(){
     intervalo = setInterval(function() {
      let tempAtual =  parseInt(temperatura.value);
      let tempNovo = tempAtual - 1;
      if(tempNovo >= temMin){
        temperatura.value = tempNovo;
      }else{
         temperatura.value = temMin;
      }
     }, 150)
    })
    botao.addEventListener("mouseup",function(){
     clearInterval(intervalo);
     intervalo = null;
    })
 }

const botao2 = document.getElementById("btime");
let clicado2 = false;
botao2.addEventListener("click",function(){
   if(clicado2==false){
      adicionarTime();
      clicado2=true;
   }else{
      deletar1();
      clicado2=false;
   }
})

// funcão para criar botões de timer 
function adicionarTime(){
   var tempori = document.getElementById("tempori");
   tempori.innerHTML  += '<j id="time1"></j>'
   time1.innerHTML += '<input type="button" id="btime+" value="time+" onClick=adicionaMinuto(),adicionaMinutoo()>'
   time1.innerHTML += '<input type="button" id="btime-" value="time-" onClick=diminuiMinuto(),diminuiMinutoo()>'
}

//função para deletar botões de timer
function deletar1(){
   let del = document.getElementById("time1");
   del.remove(); 
}

//função para adicionar minuto ao timer 
function adicionaMinuto(){
   if(segundos<10800){
   segundos += 60;
   atualizar();
   if (intervaloTemp === null) {
      iniciarTimer(); 
    }
   }
   
}

//função para diminuir minuto do timer 
function diminuiMinuto(){
   if(segundos>60){
   segundos -= 60;
   atualizar();
   }
}

//função para adicionar minuto ao timer multilas vezes 
function adicionaMinutoo(){
   let botao = document.getElementById("btime+");
   let intervalo;
   botao.addEventListener("mousedown",function(){
      intervalo = setInterval(adicionaMinuto,450);
   }) 
   botao.addEventListener("mouseup", function(){
      clearInterval(intervalo);
      intervalo = null;
   });
}

//função para diminuri minuto do timer multiplas vezes 
function diminuiMinutoo(){
   let botao = document.getElementById("btime-");
   let intervalo;
   botao.addEventListener("mousedown",function(){
      intervalo = setInterval(diminuiMinuto,450);
   })
   botao.addEventListener("mouseup",function(){
      clearInterval(intervalo);
      intervalo = null;
   })
}

//função para formatar o tempo em mm/ss
const timer = document.getElementById("time");
function formatarTempo(segundos){
   const minutos = Math.floor(segundos / 60);
   const segundo = segundos % 60;
   return `${minutos.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`;
}

//função para atualizar o timer 
function atualizar(){
   tempoInput.value = formatarTempo(segundos);
}

//função para iniciar timer 
function iniciarTimer() {
   if (intervaloTemp) clearInterval(intervaloTemp); 
   intervaloTemp = setInterval(() => {
       if (segundos > 0) {
           segundos--;
           atualizar();
       } else {
           clearInterval(intervaloTemp);
           tempoInput.value = "00:00";
       }
   }, 1000);
}


