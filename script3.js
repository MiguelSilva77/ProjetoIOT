let frita1 = document.getElementById("frita1");
let frita2 = document.getElementById("frita2");
let frita3 = document.getElementById("frita3");
let clicadof = true;

frita3.value = 0;

frita1.addEventListener("click",function(){
    if(clicadof===false){
        frita1.value = "ligar";
        frita3.value = 0;
        clicadof = true;

    }else{
        frita1.value = "desligar";
        frita3.value = 100;
        clicadof = false;
    }
})

let clicadoFrita = false;
frita2.addEventListener("click",function(){
    if(clicadoFrita===false){
        addTemperatura();
        clicadoFrita = true;
    }else{
        deletaar();
        clicadoFrita = false;
    }
})

function addTemperatura(){
frita.innerHTML += "<id id='fritaa'></id>"
fritaa.innerHTML += '<input id="ftemp+"  type="button" value="temp+"  onClick=adicionaTempFrita(),adicionaTempFritaa()>';  
fritaa.innerHTML += '<input id="ftemp-" type="button" value="temp-"   onClick=retiraTempFrita(),retiraTempFritaa()>';  
}

function deletaar(){
    let del = document.getElementById("fritaa");
    del.remove();
}

function adicionaTempFrita(){
    const tempMAx = 200;
    if(frita3.value<tempMAx&&clicadof===false){
        frita3.value ++;
    }
}

function retiraTempFrita(){
    const tempMin = 50;
    if(frita3.value>tempMin&&clicadof===false){
        frita3.value--;
    }
}

function adicionaTempFritaa(){
    let botao = document.getElementById("ftemp+");
    let intervalo1; 
    botao.addEventListener("mousedown",function(){
       if(clicadof===false){
        intervalo1 = setInterval(adicionaTempFrita,400);
        }
    })
    botao.addEventListener("mouseup",function(){
        clearInterval(intervalo1);
        intervalo1 = null;
    })
}

function retiraTempFritaa(){
    let botao = document.getElementById("ftemp-");
    let intervalo1; 
    botao.addEventListener("mousedown",function(){
        if(clicadof===false){
            intervalo1 = setInterval(retiraTempFrita,400);
            }
    })
    botao.addEventListener("mouseup",function(){
        clearInterval(intervalo1);
        intervalo1 = null;
    })
}

