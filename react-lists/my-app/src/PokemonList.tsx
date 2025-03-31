type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList() {
  const pokemons: Pokemon[] = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];

  const pokemonList = pokemons.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{pokemonList}</ul>;
}
