function CalcularDesconto(valor, desconto) {
    const valorDesconto = valor * (desconto / 100);
    const valorFinal = valor - valorDesconto;

    console.log("Valor do Produto é R$ " + valor);
    console.log("Valor do Desconto é R$ " + valorDesconto);
    console.log("Valor do Produto com desconto é R$ " + valorFinal);

}

CalcularDesconto(250, 20);