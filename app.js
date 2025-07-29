function geradorNumeros() {
    // Obtém os valores dos inputs
    const quantidade = document.getElementById('quantidade').value;
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    // Valida os inputs
    if (quantidade <= 0 || de >= ate) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Gera os números aleatórios
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero;
        do {
            numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        } while (numeros.includes(numero)); // Garante que o número não seja repetido
        numeros.push(numero);
    }

    // Exibe os números gerados
    document.getElementById('resultado').textContent = `Números sorteados: ${numeros.join(', ')}`;
}

function sortear() {
    // Desabilita o botão enquanto o sorteio está em andamento
    const botao = document.getElementById('botao');
    botao.disabled = true;
    botao.classList.add('container__botao-desabilitado');

    // Gera os números após um pequeno atraso para simular o sorteio
    setTimeout(() => {
        geradorNumeros();
        // Reabilita o botão após o sorteio
        botao.disabled = false;
        botao.classList.remove('container__botao-desabilitado');
    }, 1000); // Atraso de 1 segundo
}

function reiniciar() {
    // Limpa o resultado e os inputs
    document.getElementById('resultado').textContent = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';      

    // Reabilita o botão
    const botao = document.getElementById('botao');     
    botao.disabled = false;
    botao.classList.remove('container__botao-desabilitado');       
}