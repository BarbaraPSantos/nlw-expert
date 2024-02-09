const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web.",
        "Uma linguagem de programação para criação de interfaces gráficas.",
        "Uma linguagem de programação para desenvolvimento web e criação de páginas interativas.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparar o valor e o tipo de dois operandos.",
        "Atribuir um valor a uma variável.",
        "Verificar se um valor é menor que outro.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado retornado pela função typeof em JavaScript?",
      respostas: [
        "Uma string",
        "Um número",
        "Uma função",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "myVar = 10;",
        "variável myVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um método para estilizar elementos HTML.",
        "Um tipo de dado que armazena informações.",
        "Um bloco de código reutilizável que executa uma tarefa específica.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma estrutura de controle condicional.",
        "Um tipo de dado que armazena uma coleção ordenada de elementos.",
        "Um tipo de loop em JavaScript.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um estilo de programação para desenvolvimento web.",
        "Um formato de arquivo para armazenamento de dados.",
        "Uma interface de programação que representa a estrutura de um documento HTML.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um elemento ao final de uma lista.",
        "Registrar um manipulador de eventos em um elemento.",
        "Remover um elemento do DOM.",
      ],
      correta: 1
    }
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    //loop ou laço de repetção
    for(const item of perguntas){
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta //true
  
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }
          mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }
  
        quizItem.querySelector('dl').appendChild(dt)
  
      }
      
      quizItem.querySelector('dl dt').remove(
  
      )
      //coloca a pergunta na tela
      quiz.appendChild(quizItem)
  
    }
  