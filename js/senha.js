const verificaSenha = () => {
  const en = document.getElementById("entrada").value; 
  const senha = '875f1aca09f14ed6519bb299e8c4390d';

  if (hex_md5(en) === senha) {
    localStorage.setItem('coiso', 'qualquer valor');
    window.location = 'jogadores.html';
  } else {
    alert('Senha incorreta');
  }
}

const limpaCoiso = () => {
  localStorage.removeItem('coiso');
  window.location = '/';
}

const login = () => {

  const tudo = document.getElementById('login');
  

  const titulo1 = document.createElement('h1');
  titulo1.textContent = 'Atletas Botafogo 2023-2';
  titulo1.style.margin = '0px 0px 170px 0px';


  const loginContainer = document.createElement('div');
  loginContainer.id = 'login-container';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'text';
  passwordInput.id = 'entrada';  
  passwordInput.placeholder = 'Informe a senha';
  passwordInput.style.height = '20px';

  const passwordButton = document.createElement('button');
  passwordButton.textContent = 'Entrar';
  passwordButton.style.fontSize = '12px';
  passwordButton.style.padding = '4px 5px';
  passwordButton.style.backgroundColor = '#212121';
  passwordButton.style.color = '#f1f1f1';
  passwordButton.style.borderRadius = '4px';
  passwordButton.style.margin = '0px 0px 0px 10px';
  passwordButton.onclick = verificaSenha;  

  const diponibilizarSenha = document.createElement('p');
  diponibilizarSenha.textContent = 'Efetue login com a senha: Bot123';
  diponibilizarSenha.style.fontSize = '14.5px';

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

login ();