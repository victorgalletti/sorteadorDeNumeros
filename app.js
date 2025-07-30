function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    // Se a resposta for 'false' (!true), a função para.
    if (!validarCampos(quantidade, de, ate)) {
        return;
    }

    let numerosSorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = gerarNumeros(de, ate);
        while (numerosSorteados.includes(numero)) {
            numero = gerarNumeros(de, ate);
        }
        numerosSorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  '+ numerosSorteados + '</label>';
    alterarStatusReiniciar();
}

function gerarNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } 
}

function reiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        return; // Para a execução da função se o botão estiver desabilitado
    } else {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora!</label>';
    }
    if (document.getElementById('btn-reiniciar').classList.contains('container__botao')) {
        document.getElementById('btn-reiniciar').classList.remove('container__botao');
        document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
    }
}

function validarCampos(quantidade, de, ate) {
    let resultado = document.getElementById('resultado'); 
    const limiteFixo = 50; 

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        resultado.innerHTML = '<label class="texto__paragrafo">Por favor, preencha todos os campos com números válidos.</label>';
        return false;
    }

    if (quantidade > limiteFixo) {
        resultado.innerHTML = '<label class="texto__paragrafo">A quantidade máxima de números para sortear é ' + limiteFixo + '.</label>';
        return false; 
    }

    if (de >= ate) {
        resultado.innerHTML = '<label class="texto__paragrafo">O campo "Do número" deve ser menor que o campo "Até o número".</label>';
        return false; 
    }

    if (quantidade > (ate - de + 1)) {
        resultado.innerHTML = '<label class="texto__paragrafo">A quantidade de números a sortear não pode ser maior que o intervalo disponível.</label>';
        return false; 
    }

    return true;
}