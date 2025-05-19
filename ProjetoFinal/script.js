
const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
  saudacao.textContent = "Bom dia!";
} else if (hora < 18) {
  saudacao.textContent = "Boa tarde!";
} else {
  saudacao.textContent = "Boa noite!";
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});


/*function tinkercad(){
    let tempo = document.getElementById('tempo').value

  alert(tempo)
}*/