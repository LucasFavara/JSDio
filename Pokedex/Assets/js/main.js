


//const offset = 0
//const limit = 10
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonTypeToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
// } 


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
        const newHTML = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHTML
    })
        // const newList = pokemons.map((pokemon) => {
        //     return convertPokemonToLi(pokemon)
        // })

        // const newHTML = newList.join()

        // pokemonList.innerHTML == newHTML

    //})


    //     const listItens = []
    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         listItens.push(convertPokemonToLi(pokemon))
    //     }
        
    //     console.log(listItens);

    
    //.catch((error) => console.log(error))

//     .then(function(response) {
//         console.log(response);
// })
//     .catch(function (error) {
//     console.log(error);
// })
// .finally(function (){
//     console.log('Requisição concluida');
// })
