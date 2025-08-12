# Calculadora de IMC

Este é um projeto simples e interativo de uma calculadora de Índice de Massa Corporal (IMC), que calcula e classifica o resultado com base no peso e na altura inseridos pelo usuário.

### Funcionalidades

* **Cálculo de IMC**: A aplicação calcula o IMC usando a fórmula `peso / (altura * altura)`. O resultado é arredondado para duas casas decimais.
* **Classificação de IMC**: O resultado do cálculo é classificado em categorias como "Abaixo do peso", "Peso normal", "Sobrepeso" e diferentes graus de obesidade.
* **Validação de Entrada**: O sistema verifica se os valores de peso e altura são números válidos e positivos. Uma mensagem de erro é exibida caso a entrada seja inválida.
* **Feedback Visual**: O resultado é exibido em uma caixa com cores de fundo diferentes para indicar o status da classificação. As cores incluem `success` (verde) para "Peso normal", `warning` (amarelo) para "Abaixo do peso" e "Sobrepeso", e `danger` (vermelho) para os graus de obesidade.
* **Design Responsivo**: O layout da calculadora se adapta a diferentes tamanhos de tela.

### Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* **HTML**: Define a estrutura da página, que inclui o formulário de entrada de dados e a tabela de classificação do IMC.
* **CSS**: Responsável pela estilização do projeto, garantindo um layout centralizado e responsivo. O arquivo `style.css` define os estilos para a aparência dos campos de entrada, botões e as classes de cores para o resultado.
* **JavaScript**: Contém a lógica principal da aplicação. O script lida com a entrada do usuário, executa o cálculo do IMC, determina a classificação e atualiza a interface com o resultado.

### Estrutura do Projeto

O projeto é composto por três arquivos principais:

* `index.html`: Contém a estrutura da página web, incluindo o formulário e a tabela de classificação de IMC.
* `style.css`: Define o estilo visual da calculadora, como cores, fontes e o layout responsivo.
* `script.js`: Contém a lógica JavaScript para o cálculo do IMC, a validação dos dados e a atualização do resultado na página.

### Como Usar

1.  Insira seu peso em quilogramas no campo "Peso (kg)".
2.  Insira sua altura em metros no campo "Altura (m)".
3.  Clique no botão "Calcular".
4.  O resultado será exibido abaixo do formulário, mostrando o valor do IMC e sua classificação correspondente.
