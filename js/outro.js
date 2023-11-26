const exibir = (dados) => {
  const detalhesImagem = document.createElement("img");
  detalhesImagem.src = dados.imagem;
  detalhesImagem.alt = `foto de ${dados.nome}`;

  const detalhesContainer = document.getElementById('foto');
  detalhesContainer.appendChild(detalhesImagem);
};

const obter = async () => {
  // const atletaId = acha_cookie('id');
  const endpoint = `https://botafogo-atletas.mange.li/${localStorage.getItem('id')}`;

  const resposta = await fetch(endpoint);
  const dados = await resposta.json();

  console.log("Dados do servidor:", dados);

  // Chame a função para exibir os detalhes do atleta
  exibir(dados);
};

document.addEventListener("DOMContentLoaded", () => {
  // Chame a função para obter os detalhes do atleta quando a página carregar
  obter();
});

const perfil_jogador = () => {
  const detalhes_div = document.getElementById('informacoes');

  detalhes_div.innerHTML = `
    <p>Nome: ${localStorage.getItem('nome_completo')}</p>
    <p>Nascimento: ${localStorage.getItem('nascimento')}</p>
    <p>Altura: ${localStorage.getItem('altura')}</p>
    <p>Descrição: ${localStorage.getItem('descricao')}</p>
  `;
};

perfil_jogador ()

const voltar = () => {
  const exit = document.querySelector('footer');

  const sai = document.createElement('a');
  sai.href = 'jogadores.html';
  sai.textContent = 'Voltar';
  sai.style.color = '#f1f1f1';
  sai.style.textDecoration = 'none';
  sai.style.fontSize = '16px';
  sai.style.fontWeight = 'bold';
  sai.style.backgroundColor = '#212121';
  sai.style.padding = '10px';
  sai.style.borderRadius = '4px';
  sai.style.margin = '44%'

  exit.appendChild(sai);
};

voltar();
