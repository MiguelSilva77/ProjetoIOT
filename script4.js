let luz1 = document.getElementById("luz1");
let luz11 = document.getElementById("luz11");
let luz2 = document.getElementById("luz2");
let luz22 = document.getElementById("luz22");
let luz3 = document.getElementById("luz3");
let luz33 = document.getElementById("luz33");
let luz4 = document.getElementById("luz4");
let luz44 = document.getElementById("luz44");
let clicadoL1 = true;
let clicadoL2 = true;
let clicadoL3 = true;
let clicadoL4 = true;

luz1.addEventListener("click",function(){
    if(clicadoL1===false){
        luz11.value="desligada";
        clicadoL1=true;
    }else{
        luz11.value="ligada";
        clicadoL1=false
    }
})

luz2.addEventListener("click",function(){
    if(clicadoL2===false){
        luz22.value="desligada";
        clicadoL2=true;
    }else{
        luz22.value="ligada";
        clicadoL2=false
    }
})

luz3.addEventListener("click",function(){
    if(clicadoL3===false){
        luz33.value="desligada";
        clicadoL3=true;
    }else{
        luz33.value="ligada";
        clicadoL3=false
    }
})

luz4.addEventListener("click",function(){
    if(clicadoL4===false){
        luz44.value="desligada";
        clicadoL4=true;
    }else{
        luz44.value="ligada";
        clicadoL4=false
    }
})