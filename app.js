function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // O console.log aqui serve para verificar se a seção foi encontrada corretamente no DOM
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se o campoPesquisa for vazio
    if (campoPesquisa == ""){
        //Finaliza a Função 
        section.innerHTML = "<p>Nada foi encontrado. Você não digitou nada.</p>"
        return
    }
  
    //Deixa em minúsculo a palavra de busca
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    //Declara variáveis titulo e descrição para transformar em lower case
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) do array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.titulo.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Checa se o título inclui o valor da variável campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada resultado, formatando-o como uma div com título, descrição e links
      resultados += `
        <div class='item-resultado'>
          <h2>
            <a href="${dado.insta}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Clique aqui para mais informações sobre a atleta.</a>
        </div>
      `;
      }
    }

    //se não tiver nada em resultados, passar a mensagem e parar a função
    if (!resultados){
      section.innerHTML = "<p>Atleta não encontrado.</p>"
      return
    }
  
    // Atualiza o conteúdo da seção com o HTML gerado
    section.innerHTML = resultados;
  }

