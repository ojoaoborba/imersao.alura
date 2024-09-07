function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("search-input").value;
    // A variável search-input é o id correto

    // Se o campo de pesquisa estiver vazio, mostra uma mensagem e esconde a caixa
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo!</p>";
        section.classList.remove('resultados-visiveis'); // Remove a classe que mostra a caixa
        return;
    }

    // Converte o valor do campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "", descricao = "", genero = "", diretor = "", elenco = "", ano = "";

    // Itera sobre cada filme na lista de filmes
    for (let movie of movies) {
        titulo = movie.titulo.toLowerCase();
        descricao = movie.descricao.toLowerCase();
        genero = movie.genero.toLowerCase();
        diretor = movie.diretor.toLowerCase();
        elenco = movie.elenco.toLowerCase();
        ano = movie.ano.toString();
        // Converte o ano para string

        // Verifica se qualquer um desses campos contém o valor pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || diretor.includes(campoPesquisa) || elenco.includes(campoPesquisa) || ano.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado
            resultados += `
           <div class="item-resultado">
    <img src="${movie.poster}" alt="Descrição da imagem">
    <div class="texto">
        <h2>
            <a href="${movie.link}" target="_blank">${movie.titulo} (${movie.ano})</a>
        </h2>
        <p class="descricao-meta">${movie.descricao}</p>
        <p class="descricao-meta"><strong>Diretor:</strong> ${movie.diretor}</p>
        <p class="descricao-meta"><strong>Elenco:</strong> ${movie.elenco}</p>
        <a href="${movie.link}" target="_blank">Mais informações</a>
    </div>
</div>
        `;
        }
    }

    // Se houver resultados, exibe a caixa de resultados, caso contrário, exibe uma mensagem de "nada encontrado"
    if (resultados) {
        section.innerHTML = resultados;
        section.classList.add('resultados-visiveis'); // Adiciona a classe que exibe a caixa
    } else {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        section.classList.remove('resultados-visiveis'); // Remove a classe que mostra a caixa
    }
}
