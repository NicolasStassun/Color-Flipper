let opcao = 1;

const Simple = document.getElementById('Simple');
const Hex = document.getElementById('Hex');


function mudarCorHex(){

    const fundo = document.getElementById('fundo');
    const butao = document.getElementById('trocaFundo');
    const label = document.getElementById('labelCor');

    let opcoesHex = '0123456789ABCDEF';
    let corDeFundo = '#';
    
    for(let i = 0; i < 6; i++){
        corDeFundo += opcoesHex[Math.floor(Math.random() * opcoesHex.length)];
    }

    fundo.style.backgroundColor = corDeFundo;
    butao.style.backgroundColor = corDeFundo;
    label.innerText = corDeFundo;
    label.style.color = corDeFundo;

}



function mudaCorSimple() {

    const fundo = document.getElementById('fundo');
    const butao = document.getElementById('trocaFundo');
    const label = document.getElementById('labelCor');

    let corDeFundo = Math.floor(Math.random() * 10) + 1;

    if (corDeFundo == 1) {
        fundo.style.backgroundColor = 'blue';
        butao.style.backgroundColor = 'blue';
        label.innerText = ' Azul';
        label.style.color = 'blue';
    }
    else if (corDeFundo == 2) {
        fundo.style.backgroundColor = 'red';
        butao.style.backgroundColor = 'red';
        label.innerText = ' Vermelho';
        label.style.color = 'red';
    }
    else if (corDeFundo == 3) {
        fundo.style.backgroundColor = 'green';
        butao.style.backgroundColor = 'green';
        label.innerText = ' Verde';
        label.style.color = 'green';
    }
    else if (corDeFundo == 4) {
        fundo.style.backgroundColor = 'yellow';
        butao.style.backgroundColor = 'yellow';
        label.innerText = ' Amarelo';
        label.style.color = 'yellow';
    }
    else if (corDeFundo == 5) {
        fundo.style.backgroundColor = 'orange';
        butao.style.backgroundColor = 'orange';
        label.innerText = ' Laranja';
        label.style.color = 'orange';
    }
    else if (corDeFundo == 6) {
        fundo.style.backgroundColor = 'purple';
        butao.style.backgroundColor = 'purple';
        label.innerText = ' Roxo';
        label.style.color = 'purple';
    }
    else if (corDeFundo == 7) {
        fundo.style.backgroundColor = 'pink';
        butao.style.backgroundColor = 'pink';
        label.innerText = ' Rosa';
        label.style.color = 'pink';
    }
    else if (corDeFundo == 8) {
        fundo.style.backgroundColor = 'brown';
        butao.style.backgroundColor = 'brown';
        label.innerText = ' Marrom';
        label.style.color = 'brown';
    }
    else if (corDeFundo == 9) {
        fundo.style.backgroundColor = 'gray';
        butao.style.backgroundColor = 'gray';
        label.innerText = ' Cinza';
        label.style.color = 'gray';
    }
    else if (corDeFundo == 10) {
        fundo.style.backgroundColor = 'azure';
        butao.style.backgroundColor = 'azure';
        label.innerText = ' Azul-claro';
        label.style.color = 'azure';
    }

}
