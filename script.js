const form = document.querySelector('form');
const resultadoDiv = document.querySelector('#resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();

   
    const pesoComeco = document.querySelector('#peso').value.trim().replace(',', '.');
    const alturaComeco = document.querySelector('#altura').value.trim().replace(',', '.');

    const peso = parseFloat(pesoComeco);
    const altura = parseFloat(alturaComeco);

    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
       
        mostrarResultado("Inválido! Preencha corretamente.", 'danger');
        return;
    }

    const imc = peso / (altura * altura);
    const imcFix = imc.toFixed(2);

    const classificacao = getClassificacao(imc);

   
    mostrarResultado(`Seu IMC é ${imcFix} (${classificacao}).`, getClasseCor(imc));
});


function getClassificacao(imc){
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 25) return 'Peso normal';
    else if (imc < 30) return 'Sobrepeso';
    else if (imc < 35) return 'Obesidade grau 1';
    else if (imc < 40) return 'Obesidade grau 2';
    else {
        return 'Obesidade grau 3';
    }
}


function mostrarResultado(html, classe){
    resultadoDiv.className = 'resultado ' + classe;
    resultadoDiv.innerHTML = html;
    resultadoDiv.style.display = 'block';
}


function getClasseCor(imc) {
    if (imc < 18.5) return 'warning';
    if (imc < 25) return 'success';
    if (imc < 30) return 'warning';
    return 'danger';
}