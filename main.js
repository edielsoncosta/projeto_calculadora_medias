const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const atividades = [];
const notas = [];
const spanaprovado =  '<span class ="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class ="resultafo reprovado">Reprovado</span>';
const notaMinima =parseFloat(prompt('digite nota minima: '));

let linhas = '';
 
form.addEventListener('submit' , function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputnomeatividade.value)){
        alert(`A atividade ${inputnomeatividade.value} já foi inserida`);
    }else{
        atividades.push(inputnomeatividade.value);
        notas.push(parseFloat(inputnotaatividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputnomeatividade.value} </td>`;
        linha += `<td>${inputnotaatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>;`
    
        linhas += linha;
    }

    inputnomeatividade.value = '';
    inputnotaatividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanaprovado : spanreprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length;
    
}