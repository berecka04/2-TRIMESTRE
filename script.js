const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "VOCẼ SABE O QUE GOSTA? FAÇA ESSE TESTE E VEJA QUAL SEU TIPO DE PERSONALIDADE",
        alternativas: [
            {
                texto: "Sim. Já me decidi do que quero!",
                afirmacao: "."
            },
            {
                texto: "Não. Ainda tenho dúvidas sobre o que quero!",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Caso você ja tenha se decidido do que quer cursar, esse curso é um sonho de criança ou você pretende cursar pensando no retorno benéfico financeiro?",
        alternativas: [
            {
                texto: "Sim, esse curso é sonhado por anos, é algo que gosto muito. ",
                afirmacao: "."
            },
            {
                texto: "Em tempos atuais, é melhor deixar o que gosta de lado e pensar no retorno financeiro.",
                afirmacao: "."
            }  
        ]
    },
    {
        enunciado: "Caso não tenha escolhido ainda, vocẽ acha que essa dúvida sobre escolher a profissão do seu futuro é ocasionada por qual motivo? ou você não pretende cursar faculdade?",
        alternativas: [
            {
                texto: "Pela falta de incentivo",
                afirmacao: "."
            },
            {
                texto: "Não pretendo cursar faculdade, falta de aptidão e/ou prefiro cursos profissionalizantes.",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Você prefere a área de humanas ou a área de exatas?",
        alternativas: [
            {
                texto: "Humanas, cálculos não são minha vibe.",
                afirmacao: "."
            },
            {
                texto: "Exatas, escrever redação me deixa sonolento.",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();