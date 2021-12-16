import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const pokemonDisplay = pokemon.map((pokee) => (
    <PokemonCard key={pokee.id} name={pokee.name} hp={pokee.hp} sprites={pokee.sprites}/>
  ))
  return (
    <Card.Group itemsPerRow={6}>
      <div>
        {pokemonDisplay}
      </div>
    </Card.Group>
  );
}

export default PokemonCollection;
