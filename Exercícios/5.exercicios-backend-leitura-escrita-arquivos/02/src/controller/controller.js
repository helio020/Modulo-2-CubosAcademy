const { listarPokemons, detalharPokemon } = require('utils-playground');

const obterListaPokemons = async (req, res) => {
    try {
        const pokemons = await listarPokemons();
        return res.status(200).json(pokemons.results);
    } catch (error) {
        return res.status(500).json(`Deu erro: ${error.message}`);
    }
};

const obterPokemon = async (req, res) => {
    const { id } = req.params;

    try {
        const pokemons = await detalharPokemon(parseInt(id) || id);
        const resultado = {
            id: pokemons.id,
            name: pokemons.name,
            height: pokemons.height,
            weight: pokemons.weight,
            base_experience: pokemons.base_experience,
            forms: pokemons.forms,
            abilities: pokemons.abilities,
            species: pokemons.species
        }
        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json(`Deu erro: ${error.message}`);
    }
};

module.exports = {
    obterListaPokemons,
    obterPokemon
}