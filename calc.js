var items = [];


document.querySelector('input[type=submit]').addEventListener('click', ()=>{

    var produto = document.querySelector('input[name=itens]');
    var preco = document.querySelector('input[name=valor-compras]');

    items.push({
        nome: produto.value,
        valor: preco.value   
    }); // push //


    let listaProdutos = document.querySelector('.lista-cadastrada');
    let soma = 0;


    listaProdutos.innerHTML="";
    items.map(function(val){

        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
       
        <td>`+val.nome+`</td>
        <td>R$ `+val.valor+` </td>
       `
        
    }); // items.map //


    soma = soma.toFixed(2);
    produto.value = "";
    preco.value = "";

   
   

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




