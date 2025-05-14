let coifa = document.getElementById("coifa"); // variáveis que controlam botão e caixa de texto da coifa 
let apertado = true;
let coifa1 = document.getElementById("coifa1");
coifa.addEventListener("click",function(){ //função que atribui comando de ligar e desligar no botão coifa 
    if(apertado===false){
        coifa1.value="desligada";
        apertado=true;
    }else{
        coifa1.value="ligada";
        apertado=false;
    }
})