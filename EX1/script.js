const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const carta = document.getElementsByClassName('carta');

function createSpan(textoRecebido) {
  const span = document.createElement('span');
  span.textContent = textoRecebido;
  return span;
}

const dice = (value) => Math.floor(Math.random() * value);

const adicionaClasse = (valor) => {
  const array1 = ['newspaper', 'magazine1', 'magazine2'];
  const array2 = ['medium', 'big', 'reallybig'];
  const array3 = ['rotateleft', 'rotateright'];
  const array4 = ['skewleft', 'skewright'];
  if (valor === 1) return array1[dice(2)];
  if (valor === 2) return array2[dice(2)];
  if (valor === 3) return array3[dice(1)];
  if (valor === 4) return array4[dice(1)];
};

const randomizaClasse = ({ target }) => {
  carta[0].classList = '';
  target.classList.add('carta');
  target.classList.add(adicionaClasse(1));
  target.classList.add(adicionaClasse(2));
  target.classList.add(adicionaClasse(3));
  target.classList.add(adicionaClasse(4));
};

function validationInput() {
  if (input.value === '' || input.value === ' ' || input.value === '  ') {
    paragrafo.innerText = '';
    const span = createSpan('Por favor, digite o conteúdo da carta.');
    paragrafo.appendChild(span);
  }
  if (input.value) {
    paragrafo.innerText = '';
    const span = createSpan(input.value);
    span.classList.add('carta');
    span.addEventListener('click', randomizaClasse);
    span.classList.add(adicionaClasse(1));
    span.classList.add(adicionaClasse(2));
    span.classList.add(adicionaClasse(3));
    span.classList.add(adicionaClasse(4));
    paragrafo.appendChild(span);
  }
}

button.addEventListener('click', validationInput);
