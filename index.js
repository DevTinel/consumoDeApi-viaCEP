const button = document.querySelector('button');
const resultado = document.querySelector('#resultado');

async function buscar() {
  const cep = document.querySelector('input').value;
  const resposta = fetch(`https://viacep.com.br/ws/${cep}/json`);
  const body = await (await resposta).json();
  document.querySelector('.hide').classList.remove('hide');
  console.log(body);
  resultado.innerHTML = `
  <p>Cep : ${body.cep}</p>
  <p>Logradouro: ${body.logradouro}</p>
  <p>Bairro: ${body.bairro}</p>
  <p>Localidade: ${body.localidade}</p>
  <p>UF: ${body.uf}</p>
  <p>ddd: ${body.ddd}</p>
  `;
}
button.addEventListener('click', buscar);
