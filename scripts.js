function adicionarUsuario() {
  const nome = document.getElementById("nome").value;
  const vitorias = parseInt(document.getElementById("vitorias").value) || 0;
  const kills = parseInt(document.getElementById("kills").value) || 0;
  const derrotas = parseInt(document.getElementById("derrotas").value) || 0;
  const conquistas = parseInt(document.getElementById("conquistas").value) || 0;

  const pontosTotais = calcularPontos(vitorias, kills, derrotas, conquistas);

  const tabelaCorpo = document.getElementById("tabela-corpo");
  const newRow = tabelaCorpo.insertRow();

  const cellNome = newRow.insertCell(0);
  const cellVitorias = newRow.insertCell(1);
  const cellKills = newRow.insertCell(2);
  const cellDerrotas = newRow.insertCell(3);
  const cellConquistas = newRow.insertCell(4);
  const cellPontosTotais = newRow.insertCell(5);

  cellNome.innerHTML = nome;
  cellVitorias.innerHTML = vitorias;
  cellKills.innerHTML = kills;
  cellDerrotas.innerHTML = derrotas;
  cellConquistas.innerHTML = conquistas;
  cellPontosTotais.innerHTML = pontosTotais;
}

function calcularPontos(vitorias, kills, derrotas, conquistas) {
  // Fórmula para calcular pontos - você pode ajustar essa lógica conforme necessário
  const pontos = vitorias * 3 + kills * 2 - derrotas * 1 + conquistas * 5;
  return pontos;
}
