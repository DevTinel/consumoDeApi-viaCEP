const button = document.querySelector('button');
const resultado = document.querySelector('#resultado');
const input = document.querySelector('input');
const small = document.querySelector('small');

const isValidBRZip = (cep) => /^[0-9]{5}-[0-9]{3}$/.test(cep);
async function buscar() {
  const cep = document.querySelector('input').value;
  if (isValidBRZip(cep)) {
    const resposta = fetch(`https://viacep.com.br/ws/${cep}/json`);
    const body = await (await resposta).json();

    input.classList.remove('err');
    small.classList.add('hidden');
    console.log(body);
    resultado.innerHTML = `
    <div class = "inf" >
    <p><span>Cep</span>  : ${body.cep}</p>
    <p><span>Logradouro</span>: ${body.logradouro}</p>
    <p><span>Bairro</span>: ${body.bairro}</p>
    <p><span>Localidade:</span>  ${body.localidade}</p>
    <p><span>UF:</span> ${body.uf}</p>
    <p><span>ddd:</span>${body.ddd}</p>
    </div>
    `;
  } else {
    input.classList.add('err');
    small.classList.remove('hidden');
    resultado.innerHTML = '';
  }
}
button.addEventListener('click', buscar);
