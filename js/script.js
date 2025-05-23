/**
 * Calculadora de Porcentagem
 * Script para calcular a porcentagem de um valor em relação a um total
 * e exibir os cálculos detalhados com explicação
 */

// Função para calcular a porcentagem
function calcularPorcentagem() {
    // Obter os valores dos campos de entrada
    const valor = parseFloat(document.getElementById('valor').value);
    const total = parseFloat(document.getElementById('total').value);
    const resultadoElement = document.getElementById('resultado');
    const calculosElement = document.getElementById('calculos');
    const explicacaoElement = document.getElementById('explicacao');
    
    // Limpar conteúdo anterior
    calculosElement.innerHTML = '';
    explicacaoElement.innerHTML = '';
    
    // Validar se os valores são números válidos
    if (isNaN(valor) || isNaN(total)) {
        resultadoElement.textContent = "Por favor, insira valores numéricos válidos.";
        resultadoElement.style.color = "#e74c3c";
        return;
    }
    
    // Validar se o total não é zero (para evitar divisão por zero)
    if (total === 0) {
        resultadoElement.textContent = "O valor total não pode ser zero.";
        resultadoElement.style.color = "#e74c3c";
        return;
    }
    
    // Calcular a porcentagem
    const porcentagem = (valor / total) * 100;
    
    // Formatar o resultado com até 2 casas decimais
    const porcentagemFormatada = porcentagem.toFixed(2);
    
    // Exibir o resultado
    resultadoElement.textContent = `${valor} é ${porcentagemFormatada}% de ${total}`;
    resultadoElement.style.color = "#27ae60";
    
    // Adicionar animação simples ao resultado
    resultadoElement.style.animation = "none";
    setTimeout(() => {
        resultadoElement.style.animation = "fadeIn 0.5s";
    }, 10);
    
    // Exibir os cálculos detalhados
    const calculosHTML = `
        <h2>Cálculos Detalhados</h2>
        <div class="calculo-passo">
            <p><strong>Passo 1:</strong> Identificar os valores</p>
            <p>Valor: ${valor}</p>
            <p>Total: ${total}</p>
        </div>
        <div class="calculo-passo">
            <p><strong>Passo 2:</strong> Aplicar a fórmula da porcentagem</p>
            <p>Porcentagem = (Valor ÷ Total) × 100</p>
            <p>Porcentagem = (${valor} ÷ ${total}) × 100</p>
            <p>Porcentagem = ${(valor/total).toFixed(4)} × 100</p>
            <p>Porcentagem = ${porcentagemFormatada}%</p>
        </div>
    `;
    calculosElement.innerHTML = calculosHTML;
    
    // Exibir a explicação
    const explicacaoHTML = `
        <h2>Explicação</h2>
        <p>Para calcular qual porcentagem um valor representa em relação a um total, dividimos o valor pelo total e multiplicamos por 100.</p>
        <p>Neste caso, queremos saber qual porcentagem ${valor} representa de ${total}.</p>
        <p>A divisão ${valor} ÷ ${total} = ${(valor/total).toFixed(4)} nos dá a fração do total.</p>
        <p>Multiplicando essa fração por 100, obtemos a porcentagem: ${(valor/total).toFixed(4)} × 100 = ${porcentagemFormatada}%.</p>
        <p>Portanto, ${valor} corresponde a ${porcentagemFormatada}% de ${total}.</p>
    `;
    explicacaoElement.innerHTML = explicacaoHTML;
    
    // Adicionar animação aos novos elementos
    calculosElement.style.animation = "none";
    explicacaoElement.style.animation = "none";
    setTimeout(() => {
        calculosElement.style.animation = "fadeIn 0.5s";
        explicacaoElement.style.animation = "fadeIn 0.7s";
    }, 10);
}

// Adicionar evento de tecla Enter para os campos de entrada
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularPorcentagem();
            }
        });
    });
    
    // Focar no primeiro campo ao carregar a página
    document.getElementById('valor').focus();
});

// Adicionar animação CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
