/*

 1 - USUÁRIO DIGITA NOMES DOS CLUBES;
 2 - CLICA NO BOTÃO PARA ADICIONAR CLUBES;
 3 - USUÁRIO CLICA NO BOTÃO PARA LISTAR OS CLUBES;
 4 - APARECE UMA LISTA DE TODOS OS CLUBES ADICIONADOS;
 5 - FAZER O EMBARALHAMENTO DOS ITENS ADICIONADOS;
 6 - USUÁRIO CLICA NO BOTÃO PARA GERAR TABELA;
 7 - 
 */

//referenciar elementos

const clubes = [];

function inscricaoClubes(){
    const inClube = document.getElementById("input_clubes");
    const nomeClube = inClube.value;

    if (nomeClube.trim() !== "") {
        clubes.push(nomeClube);
        inClube.value = "";
      }
}

function listarClubes(){
    const listaDeClubes = document.getElementById("lista_de_clubes");
    listaDeClubes.innerHTML = "";

    clubes.forEach(function(nome){
        const li= document.createElement("li");
        li.textContent = nome;
        listaDeClubes.appendChild(li);
    });
}

function sorteioArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }



function criarTabela(){
    const tabelaElemento = document.getElementById("tabela_club");

    sorteioArray(clubes);


    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


    const cabecalho = document.createElement("tr");
    const cabecalhoColuna1 = document.createElement("th");
    cabecalhoColuna1.textContent = "Número do Jogo";
    const cabecalhoColuna2 = document.createElement("th");
    cabecalhoColuna2.textContent = "Competidor 1";
    const cabecalhoColuna3 = document.createElement("th");
    cabecalhoColuna3.textContent = "Versus";
    const cabecalhoColuna4 = document.createElement("th");
    cabecalhoColuna4.textContent = "Competidor 2";
    cabecalho.appendChild(cabecalhoColuna1);
    cabecalho.appendChild(cabecalhoColuna2);
    cabecalho.appendChild(cabecalhoColuna3);
    cabecalho.appendChild(cabecalhoColuna4);
    thead.appendChild(cabecalho);


    for (let i = 0; i < clubes.length; i += 2) {
        const linha = document.createElement("tr");
        const coluna1 = document.createElement("td");
        coluna1.textContent = `Jogo ${i / 2 + 1}`;
        const coluna2 = document.createElement("td");
        coluna2.textContent = clubes[i] || "";
        const coluna3 = document.createElement("td");
        coluna3.textContent = "X";
        const coluna4 = document.createElement("td");
        coluna4.textContent = clubes[i + 1] || "";
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        linha.appendChild(coluna3);
        linha.appendChild(coluna4);
        tbody.appendChild(linha);
      }

      tabela.appendChild(thead);
      tabela.appendChild(tbody);
      tabelaElemento.innerHTML = ""; 
      tabelaElemento.appendChild(tabela);


}

    

