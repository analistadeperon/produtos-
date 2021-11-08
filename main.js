let nome = document.getElementById("ip_produto");
let quantidade = document.getElementById("ip_qtd");
let preco = document.getElementById("ip_preco");
let preco_medio = '0';

let btn_cadastrar = document.getElementById("btn_cadastrar");
let btn_excluir = document.getElementById("btn_excluir");
let tabela = document.getElementById('tabela');
let banco = [];
let produto = new Object();

//Insere uma nova linha na tabela
btn_cadastrar.onclick = function(){
    if(nome.value === '' && quantidade.value === "0" && preco.value === "0"){
        alert('Favor preencher todos os campos antes de cadastrar o produto.');
    }else{
        produto.nome = nome.value;
        produto.quantidade = quantidade.value;
        produto.preco = preco.value;
        preco_medio = (preco.value / quantidade.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        banco.push(produto)

        tabela.innerHTML += `<tr><td><button id="btn_excluir" onclick="excluir(event.target)">X</button></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>R$ ${preco.value}</td><td>${preco_medio}</td></tr>`;
        nome.value = "";
        quantidade.value = "0";
        preco.value = "0";
    }
}

//Excluir um elemento selecionado
function excluir(elementoClicado){
    elementoClicado.closest("tr").remove();
}
