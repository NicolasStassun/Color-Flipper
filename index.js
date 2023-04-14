function mudarTipoSimple() {
    const butao = document.getElementById('trocaFundo');
    
    butao.addEventListener('click', mudaCorSimple);
}

function mudarTipoHex() {
    const butao = document.getElementById('trocaFundo');
    
    butao.addEventListener('click', mudaCorHex);
}

function mudarCorHex(){

    const fundo = document.getElementById('fundo');
    const label = document.getElementById('labelCor');

    let opcoesHex = '0123456789ABCDEF';
    let corDeFundo = '#';
    
    for(let i = 0; i < 6; i++){
        corDeFundo += opcoesHex[Math.floor(Math.random() * opcoesHex.length)];
    }

    fundo.style.backgroundColor = corDeFundo;
    label.innerText = corDeFundo;
    label.style.color = corDeFundo;

}

function mudaCorSimple() {

    const fundo = document.getElementById('fundo');
    const label = document.getElementById('labelCor');
    const header = document.getElementById('container');

    let corDeFundo = Math.floor(Math.random() * 10) + 1;

    if (corDeFundo == 1) {
        fundo.style.backgroundColor = 'blue';
        label.innerText = ' Azul';
        label.style.color = 'blue';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 2) {
        fundo.style.backgroundColor = 'red';
        label.innerText = ' Vermelho';
        label.style.color = 'red';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 3) {
        fundo.style.backgroundColor = 'green';
        label.innerText = ' Verde';
        label.style.color = 'green';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 4) {
        fundo.style.backgroundColor = 'yellow';
        label.innerText = ' Amarelo';
        label.style.color = 'yellow';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 5) {
        fundo.style.backgroundColor = 'orange';
        label.innerText = ' Laranja';
        label.style.color = 'orange';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 6) {
        fundo.style.backgroundColor = 'purple';
        label.innerText = ' Roxo';
        label.style.color = 'purple';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 7) {
        fundo.style.backgroundColor = 'pink';
        label.innerText = ' Rosa';
        label.style.color = 'pink';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 8) {
        fundo.style.backgroundColor = 'brown';
        label.innerText = ' Marrom';
        label.style.color = 'brown';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 9) {
        fundo.style.backgroundColor = 'gray';
        label.innerText = ' Cinza';
        label.style.color = 'gray';
        header.style.boxShadow = '0px 1px 15px 1px';
    }
    else if (corDeFundo == 10) {
        fundo.style.backgroundColor = 'azure';
        label.innerText = ' Azul-claro';
        label.style.color = 'azure';
        header.style.boxShadow = '0px 1px 15px 1px';
    }

}

