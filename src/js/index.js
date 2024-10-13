/*
    OBJETIVO - quando clicar nopokedev da listagem temos que escnder o cartao correspondente
*/

//PASSO 1 - PRECISAMOS CRIAR UMA VARIAVEL NO JS PRA TRABALHAR COM A LISTAEM DE POKEDEVS 
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - Identidicar o evento de clique no elemento da listagem

/*const devchu = document.getElementById("devchu");
devchu.addEventListener("click", () => {
    console.log('oi');
    
})*/

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        // PASSO 3 - Remover classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();

        //PASSO 4 - Ao clicar em um pokedev da listafem pegamos o id desse pokedev pra saber qual cartao abrir
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);
        
        //PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();

        //PASSO 6 - Adiciona a classe ativo no pokedev selecionado na listagem
        ativarPokedevNaListagem(idPokedevSelecionado);
    })
    
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevaberto = document.querySelector(".aberto");
    cartaoPokedevaberto.classList.remove("aberto");
}
