// Aguarde a página terminar de carregar
document.addEventListener('DOMContentLoaded', function () {

    // Anexar um ouvinte de evento `change` a uma caixa de seleção
    document.getElementById('billing-checkbox').addEventListener('change', toggleBilling);
}, false);

function toggleBilling() {
    // Selecionar os campos de texto de cobrança
    let billingItems = document.querySelectorAll('#billing input[type="text"]');
    // Selecionar os rótulos de texto de cobrança
    let billingLabels = document.querySelectorAll('.billing-label');

    // Alternar os campos e rótulos de texto de cobrança
    for (let i = 0; i < billingItems.length; i++) {
        billingItems[i].disabled = !billingItems[i].disabled;

        if (billingLabels[i].getAttribute('class') === 'billing-label disabled-label') {
            billingLabels[i].setAttribute('class', 'billing-label');
        } else {
            billingLabels[i].setAttribute('class', 'billing-label disabled-label');
        }
    }
}
