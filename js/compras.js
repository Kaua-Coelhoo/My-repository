let compras = JSON.parse(localStorage.getItem('compras')) || []; // Recupera a lista de compras do localStorage 
// ou inicializa como um array vazio
function comprar() { // Função para adicionar itens à lista de compras
    let continuar = true; //Usada para controlar o laço while
    
    while (continuar) { // Laço que permite adicionar vários itens à lista de compras
        let item = prompt("Digite um item:"); // Solicita ao usuário que digite um item

        if(item && item.trim() !== ""){ // Verifica se o item não é vazio ou apenas espaços em branco
            compras.push(item.trim()); // Adiciona o item à lista de compras
        }
        let resposta = prompt("Adicionar outro item?(s/n)");
        if(!resposta || resposta.toLowerCase() !== 's') {
            continuar = false;
        }
        localStorage.setItem("compras", JSON.stringify(compras));
    }
}

function atualizarlista() { // Função para atualizar a lista de compras exibida na página
    let lista = document.getElementById("listaCompras"); // Obtém o elemento da lista de compras
    lista.innerHTML = ""; // Limpa a lista atual
    compras.forEach((item, i) => { // Itera sobre cada item na lista de compras
         const li = document.createElement("li");
         li.textContent = `$(i + 1). ${item}`; // Cria um novo item de lista com o texto do item
            lista.appendChild(li); // Adiciona o item à lista

    });
}   
