function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let qtdIngresso = document.getElementById("qtd").value;
  if (tipoIngresso == "pista") {
    comprarPista(qtdIngresso);
  } else if (tipoIngresso == "inferior") {
    comprarInferior(qtdIngresso);
  } else {
    comprarSuperior(qtdIngresso);
  }
}

function comprarPista(qtdIngresso) {
  let qtdPistaTexto = document.getElementById("qtd-pista");
  let qtdPistaValor = parseInt(qtdPistaTexto.innerHTML);
  if (qtdIngresso > qtdPistaValor) {
    alert(
      `ERRO: Você digitou um valor maior que a quantidade de ingressos disponíveis para PISTA`
    );
  } else if (qtdIngresso < 0) {
    alert(`ERRO: Digite um número válido para a compra de ingressos.`);
  } else {
    alert("Compra realizada com sucesso!");
    qtdPistaValor = qtdPistaValor - qtdIngresso;
    qtdPistaTexto.innerHTML = `${qtdPistaValor}`;
  }
}
function comprarInferior(qtdIngresso) {
  let qtdInferiorTexto = document.getElementById("qtd-inferior");
  let qtdInferiorValor = parseInt(qtdInferiorTexto.innerHTML);
  if (qtdIngresso > qtdInferiorValor) {
    alert(
      `ERRO: Você digitou um valor maior que a quantidade de ingressos disponíveis para Cadeira Inferior`
    );
  } else if (qtdIngresso < 0) {
    alert(`ERRO: Digite um número válido para a compra de ingressos.`);
  } else {
    alert("Compra realizada com sucesso!");
    qtdInferiorValor = qtdInferiorValor - qtdIngresso;
    qtdInferiorTexto.innerHTML = `${qtdInferiorValor}`;
  }
}
function comprarSuperior(qtdIngresso) {
  let qtdSuperiorTexto = document.getElementById("qtd-superior");
  let qtdSuperiorValor = parseInt(qtdSuperiorTexto.innerHTML);
  if (qtdIngresso > qtdSuperiorValor) {
    alert(
      `ERRO: Você digitou um valor maior que a quantidade de ingressos disponíveis para Cadeira Superior`
    );
  } else if (qtdIngresso < 0) {
    alert(`ERRO: Digite um número válido para a compra de ingressos.`);
  } else {
    alert("Compra realizada com sucesso!");
    qtdSuperiorValor = qtdSuperiorValor - qtdIngresso;
    qtdSuperiorTexto.innerHTML = `${qtdSuperiorValor}`;
  }
}
