const perguntas = [
  // FÁCEIS (1 ponto)
  {
    texto: "O que significa HTML?",
    alternativas: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
    correta: 0,
    dificuldade: "facil"
  },
  {
    texto: "Qual tag HTML é usada para criar um parágrafo?",
    alternativas: ["&lt;h1&gt;", "&lt;div&gt;", "&lt;p&gt;", "&lt;br&gt;"],
    correta: 2,
    dificuldade: "facil"
  },
  {
    texto: "Qual é o operador de atribuição em JavaScript?",
    alternativas: ["==", "=", "===", "!="],
    correta: 1,
    dificuldade: "facil"
  },
  {
    texto: "Como se declara uma variável em JavaScript (ES6)?",
    alternativas: ["var nome", "let nome", "const nome", "Todas as anteriores"],
    correta: 3,
    dificuldade: "facil"
  },
  {
    texto: "Qual destes é um tipo de dado primitivo em JavaScript?",
    alternativas: ["Array", "Object", "String", "Function"],
    correta: 2,
    dificuldade: "facil"
  },
  {
    texto: "Qual propriedade CSS altera a cor do texto?",
    alternativas: ["background-color", "font-style", "color", "text-align"],
    correta: 2,
    dificuldade: "facil"
  },
  {
    texto: "Como se faz um comentário de linha única em JavaScript?",
    alternativas: ["// comentário", "&lt;!-- comentário --&gt;", "/* comentário */", "# comentário"],
    correta: 0,
    dificuldade: "facil"
  },
  {
    texto: "Qual método exibe uma mensagem em popup no navegador?",
    alternativas: ["alert()", "prompt()", "console.log()", "display()"],
    correta: 0,
    dificuldade: "facil"
  },
  {
    texto: "Qual destes NÃO é um framework JavaScript?",
    alternativas: ["React", "Vue", "Django", "Angular"],
    correta: 2,
    dificuldade: "facil"
  },
  {
    texto: "Qual extensão de arquivo é usada para folhas de estilo em cascata?",
    alternativas: [".html", ".css", ".js", ".php"],
    correta: 1,
    dificuldade: "facil"
  },
  // MÉDIAS (2 pontos)
  {
    texto: "Qual função converte uma string para inteiro em JavaScript?",
    alternativas: ["parseInt()", "parseFloat()", "toString()", "Number()"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Como acessar o terceiro elemento do array: let arr = [10, 20, 30, 40]?",
    alternativas: ["arr[2]", "arr[3]", "arr(2)", "arr.3"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Qual é o seletor CSS para selecionar todos os elementos com a classe 'ativo'?",
    alternativas: [".ativo", "#ativo", "*ativo", "ativo"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "O que retorna a expressão: typeof null em JavaScript?",
    alternativas: ["'null'", "'object'", "'undefined'", "'null object'"],
    correta: 1,
    dificuldade: "medio"
  },
  {
    texto: "Qual método adiciona um elemento ao final de um array em JavaScript?",
    alternativas: ["push()", "pop()", "shift()", "unshift()"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Qual atributo HTML é usado para criar um campo obrigatório em um formulário?",
    alternativas: ["required", "obligatory", "must", "validate"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Qual destes é um pré-processador CSS?",
    alternativas: ["Sass", "React", "Bootstrap", "jQuery"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Como se chama a função que chama a si mesma em programação?",
    alternativas: ["Callback", "Recursiva", "Anônima", "Arrow"],
    correta: 1,
    dificuldade: "medio"
  },
  {
    texto: "Qual método remove o último elemento de um array em JavaScript?",
    alternativas: ["pop()", "shift()", "splice()", "remove()"],
    correta: 0,
    dificuldade: "medio"
  },
  {
    texto: "Qual destes NÃO é um tipo de input em HTML?",
    alternativas: ["date", "range", "dropdown", "color"],
    correta: 2,
    dificuldade: "medio"
  },
  // DIFÍCEIS (3 pontos)
  {
    texto: "O que significa o termo 'hoisting' em JavaScript?",
    alternativas: [
      "Elevar o valor de uma variável",
      "Mover declarações para o topo do escopo",
      "Remover variáveis não utilizadas",
      "Executar funções assíncronas"
    ],
    correta: 1,
    dificuldade: "dificil"
  },
  {
    texto: "Qual é o resultado de: [] + [] em JavaScript?",
    alternativas: ["0", "undefined", "'' (string vazia)", "null"],
    correta: 2,
    dificuldade: "dificil"
  },
  {
    texto: "Qual destes métodos NÃO altera o array original?",
    alternativas: ["map()", "push()", "splice()", "reverse()"],
    correta: 0,
    dificuldade: "dificil"
  },
  {
    texto: "O que faz o método 'bind()' em JavaScript?",
    alternativas: [
      "Liga dois arrays",
      "Cria uma nova função com o 'this' definido",
      "Remove um evento",
      "Concatena strings"
    ],
    correta: 1,
    dificuldade: "dificil"
  },
  {
    texto: "Qual destes é um pseudo-elemento CSS?",
    alternativas: ["::after", ":hover", ".element", "#id"],
    correta: 0,
    dificuldade: "dificil"
  },
  {
    texto: "No CSS Flexbox, qual propriedade define a direção dos itens?",
    alternativas: ["flex-direction", "align-items", "justify-content", "flex-wrap"],
    correta: 0,
    dificuldade: "dificil"
  },
  {
    texto: "Qual destes métodos pode interromper a propagação de um evento em JS?",
    alternativas: ["stopPropagation()", "preventDefault()", "stopEvent()", "cancelBubble()"],
    correta: 0,
    dificuldade: "dificil"
  },
  {
    texto: "O que significa o operador '===' em JavaScript?",
    alternativas: [
      "Atribuição estrita",
      "Comparação de valor e tipo",
      "Comparação apenas de valor",
      "Concatenação"
    ],
    correta: 1,
    dificuldade: "dificil"
  },
  {
    texto: "Qual destes NÃO é um método de string em JS?",
    alternativas: ["slice()", "substr()", "splice()", "toUpperCase()"],
    correta: 2,
    dificuldade: "dificil"
  },
  {
    texto: "Qual destas opções representa um closure em JavaScript?",
    alternativas: [
      "Uma função que retorna outra função e mantém acesso ao escopo externo",
      "Uma função anônima",
      "Uma função recursiva",
      "Uma função que chama outra função"
    ],
    correta: 0,
    dificuldade: "dificil"
  }
];

/* --- helpers --- */
function decodeEntities(str) {
  // transforma &lt; &gt; &amp; etc em caracteres visíveis (<, >, &)
  return String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* --- render --- */
function renderizarPerguntas() {
  const perguntasDiv = document.getElementById('perguntas');
  perguntasDiv.innerHTML = '';
  perguntas.forEach((pergunta, i) => {
    const div = document.createElement('div');
    div.className = `question ${pergunta.dificuldade}`;
    const strong = document.createElement('strong');
    strong.textContent = `${i + 1}. (${capitalize(pergunta.dificuldade)}) ${decodeEntities(pergunta.texto)}`;
    div.appendChild(strong);

    const altDiv = document.createElement('div');
    altDiv.className = 'alternativas';
    pergunta.alternativas.forEach((alt, j) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + i;
      input.value = j;
      input.addEventListener('change', atualizarProgresso);
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + decodeEntities(alt)));
      altDiv.appendChild(label);
    });
    div.appendChild(altDiv);
    perguntasDiv.appendChild(div);
  });
}

/* --- iniciar / progresso --- */
function confirmarNome() {
  const nome = document.getElementById('nomeUsuario').value.trim();
  if (!nome) { alert('Por favor, digite seu nome!'); return; }
  document.getElementById('nomeInputDiv').style.display = 'none';
  document.getElementById('quizForm').style.display = '';
  document.getElementById('progressBar').style.display = '';
  window.quizNome = nome;
  renderizarPerguntas();
  atualizarProgresso();
  window.scrollTo(0, 0);
}

function atualizarProgresso() {
  const total = perguntas.length;
  let respondidas = 0;
  for (let i = 0; i < total; i++) {
    if (document.querySelector(`input[name="q${i}"]:checked`)) respondidas++;
  }
  const pct = Math.round((respondidas / total) * 100);
  document.getElementById('progress').style.width = pct + '%';
}

/* --- calcular resultado e mostrar correção --- */
function calcularResultado() {
  const total = perguntas.length;
  let acertos = 0, pontos = 0, naoRespondidas = 0;

  // desabilita botão para evitar cliques repetidos
  const calcBtn = document.getElementById('calcBtn');
  calcBtn.disabled = true;

  perguntas.forEach((pergunta, i) => {
    const radios = document.getElementsByName('q' + i);
    let marcada = -1;
    for (let r = 0; r < radios.length; r++) {
      if (radios[r].checked) marcada = parseInt(radios[r].value);
    }
    const perguntaDiv = document.getElementsByClassName('question')[i];
    perguntaDiv.classList.remove('correta', 'errada');
    const oldResposta = perguntaDiv.querySelector('.resposta-certa');
    if (oldResposta) oldResposta.remove();

    if (marcada === -1) {
      naoRespondidas++;
      perguntaDiv.classList.add('errada');
      perguntaDiv.appendChild(createRespostaCorreta(pergunta));
    } else if (marcada === pergunta.correta) {
      acertos++;
      perguntaDiv.classList.add('correta');
      if (pergunta.dificuldade === 'facil') pontos += 1;
      else if (pergunta.dificuldade === 'medio') pontos += 2;
      else pontos += 3;
    } else {
      perguntaDiv.classList.add('errada');
      perguntaDiv.appendChild(createRespostaCorreta(pergunta));
    }
  });

  const nome = window.quizNome || 'Usuário';
  const percentual = ((acertos / total) * 100).toFixed(1);
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <strong>${nome}, você acertou ${acertos} de ${total} perguntas!</strong><br>
    <div>Sua pontuação final: <span style="color:#2196f3;font-weight:bold;">${pontos} pontos</span></div>
    <div>Aproveitamento: ${percentual}%</div>
    <div>Não respondidas: ${naoRespondidas}</div>
    <br>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
      <button class="btn" onclick="reiniciarQuiz()">Tentar Novamente</button>
      <button class="btn" onclick="voltarParaNome()">Refazer com outro nome</button>
    </div>
  `;
  setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100);
}

function createRespostaCorreta(pergunta) {
  const d = document.createElement('div');
  d.className = 'resposta-certa';
  d.textContent = 'Resposta correta: ' + decodeEntities(pergunta.alternativas[pergunta.correta]);
  return d;
}

/* --- reiniciar / voltar nome --- */
function reiniciarQuiz() {
  document.querySelectorAll('input[type=radio]').forEach(i => i.checked = false);
  Array.from(document.getElementsByClassName('question')).forEach(qd => {
    qd.classList.remove('correta', 'errada');
    const rc = qd.querySelectorAll('.resposta-certa');
    rc.forEach(e => e.remove());
  });
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('calcBtn').disabled = false;
  document.getElementById('progress').style.width = '0%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarParaNome() {
  reiniciarQuiz();
  document.getElementById('quizForm').style.display = 'none';
  document.getElementById('nomeInputDiv').style.display = '';
  document.getElementById('progressBar').style.display = 'none';
  document.getElementById('nomeUsuario').value = '';
  window.quizNome = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}