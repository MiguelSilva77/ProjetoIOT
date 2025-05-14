let ligado1 = true;
let ligado2 = true;
let ligado3 = true;
let g1 = document.getElementById("g1");
let g2 = document.getElementById("g2");
let g3 = document.getElementById("g3");
let g11 = document.getElementById("g11");
let g22 = document.getElementById("g22");
let g33 = document.getElementById("g33");

g1.value = 5;
g2.value = 4;
g3.value = 20;

if(g1.value>14){
    g11.innerHTML = "<span>verificar geladeira</span>";
}

if(g2.value>14){
    g22.innerHTML = "<span>verificar geladeira</span>";
}

if(g3.value>14){
    g33.innerHTML = "<span>verificar geladeira</span>";
}