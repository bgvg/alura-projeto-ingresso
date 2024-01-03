function comprar(){
    let itemSelecionado = document.getElementById("tipo-ingresso").value;
    let quantidadeEscolhida = document.getElementById("qtd").value;

    let quantidadeDisponível = document.getElementById(`qtd-${itemSelecionado}`).textContent
    
    if(parseInt(quantidadeEscolhida) > parseInt(quantidadeDisponível)){
        alert('A quantidade escolhida de ingressos não está disponível.')
    } else if (quantidadeEscolhida == '') {
        alert('Favor selecionar uma quantidade.')
    } else {
        alert('Compra realizada com sucesso!')
        document.getElementById(`qtd-${itemSelecionado}`).textContent = document.getElementById(`qtd-${itemSelecionado}`).textContent - quantidadeEscolhida
    }
}

