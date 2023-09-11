
    const formulario = document.getElementById('form');
    const campoA = document.getElementById('camp-A');
    const campoB = document.getElementById('camp-B');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const valorA = parseInt(campoA.value);
        const valorB = parseInt(campoB.value);
            
        if (valorB > valorA) {
                resultado.textContent = 'Valido, Número B é maior do que o Número A!';
            } else {
                resultado.textContent = 'Não é valido, número B não é maior que o número A';
            }
        
    });


