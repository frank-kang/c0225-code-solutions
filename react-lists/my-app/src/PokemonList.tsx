export function PokemonList(props) {
  const pokemons = props.pokedex;
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
