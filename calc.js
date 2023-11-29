var items = [];


document.querySelector('input[type=submit]').addEventListener('click', ()=>{

    var produto = document.querySelector('input[name=itens]');
    var preco = document.querySelector('input[name=valor-compras]');
    var quantidade = document.querySelector('input[name=valor-quantidade]');
    

    items.push({
        nome: produto.value,
        valor: preco.value,
        quant: quantidade.value   
    }); // push //

    

    let listaProdutos = document.querySelector('.lista-cadastrada');
    let soma = 0;


    listaProdutos.innerHTML="";
    items.map(function(val){

        soma+=parseFloat(val.valor) * (val.quant);
        listaProdutos.innerHTML+=`
       
        <td>`+val.nome+`</td>
        <td> `+val.quant+`</td>
        <td>R$ `+val.valor * val.quant+` </td>
        
       `
        
    }); // items.map //


    soma = soma.toFixed(2);
    produto.value = "";
    preco.value = "";
    quantidade.value = "";

   
   

    let elementoSoma = document.querySelector('.total');
    elementoSoma.style.fontWeight = "bold";
    elementoSoma.style.fontSize = "28px";
    elementoSoma.innerHTML = 'Total: R$' + soma;

}); // addEvent //

document.querySelector('input[name=limpar]').addEventListener('click' ,()=>{
    items = [];

    document.querySelector('.lista-cadastrada').innerHTML = "";
   
    document.querySelector('.total').innerHTML = "Total: R$0";

});




