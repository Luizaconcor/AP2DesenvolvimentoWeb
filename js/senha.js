const verificaSenha = () => {
  const en = document.getElementById("entrada").value; 
  const senha = '875f1aca09f14ed6519bb299e8c4390d';

  if (hex_md5(en) === senha) {
    sessionStorage.setItem('coiso', 'qualquer valor');
    window.location = 'jogadores.html';
  } else {
    alert('Senha incorreta');
  }
}

const limpaCoiso = () => {
  sessionStorage.removeItem('coiso');
  window.location = '/';
}

const login = () => {

  const tudo = document.createElement('main');
  tudo.style.display = 'flex'
  tudo.style.gap = '200px';
  tudo.style.justifyContent = 'center';
  tudo.style.alignItems = 'center';
  tudo.style.height = '100vh';



  const titulo1 = document.createElement('h1');
  titulo1.textContent = 'Atletas Botafogo 2023-2';

  const loginContainer = document.createElement('div');
  loginContainer.id = 'login-container';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'entrada';  
  passwordInput.placeholder = 'Informe a senha';

  const passwordButton = document.createElement('button');
  passwordButton.textContent = 'Entrar';
  passwordButton.onclick = verificaSenha;  

  const diponibilizarSenha = document.createElement('p');
  diponibilizarSenha.textContent = 'Senha: Bot123';

  loginContainer.appendChild(passwordInput);
  loginContainer.appendChild(passwordButton);
  loginContainer.appendChild(diponibilizarSenha);

  tudo.appendChild(titulo1);
  tudo.appendChild(loginContainer);

  document.body.appendChild(tudo);  

  if (sessionStorage.getItem('coiso')) {
    document.getElementById('saida-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
  } else {
    document.getElementById('saida-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  }

};

document.addEventListener('DOMContentLoaded', login);

