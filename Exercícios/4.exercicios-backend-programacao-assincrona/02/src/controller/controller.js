const { listarPokemons, detalharPokemon } = require('utils-playground');

const obterListaPokemons = async (req, res) => {
    const pokemons = await listarPokemons();
    return res.status(200).json(pokemons.results);
};

const obterPokemon = async (req, res) => {
    const { id } = req.params;

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
};

module.exports = {
    obterListaPokemons,
    obterPokemon
}