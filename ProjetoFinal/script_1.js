
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

// Função para exibir o modal de login
  function fazerLogin(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const senha = document.getElementById("password").value;
      const erro = document.getElementById("mensagem-erro");
      const emailCorreto = "1111@1111";
      const senhaCorreta = "1111";

      if (email === emailCorreto && senha === senhaCorreta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo-logado").style.display = "block";
        document.getElementById("email-usuario").textContent = email;
        erro.textContent = "";
      } else {
        erro.textContent = "Email ou senha incorretos.";
      }
    }

    // Limpar mensagem de erro ao digitar novamente
    document.getElementById("email").addEventListener("input", () => {
      document.getElementById("mensagem-erro").textContent = "";
    });

    document.getElementById("password").addEventListener("input", () => {
      document.getElementById("mensagem-erro").textContent = "";
    });

    function enviarSolicitacao(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const segmento = document.getElementById("segmento").value;
  const infraestrutura = document.getElementById("infraestrutura").value;
  const objetivo = document.getElementById("objetivo").value;

  if (empresa && segmento && infraestrutura && objetivo) {
    document.getElementById("mensagem-solucao").innerHTML = `
      Obrigado, <strong>${nome}</strong>!<br>
      Em breve entraremos em contato com uma proposta personalizada para o segmento de <strong>${segmento}</strong>.
    `;
    document.getElementById("form-solucao").reset();
  } else {
    document.getElementById("mensagem-solucao").textContent = "Por favor, preencha todos os campos.";
  }
}
