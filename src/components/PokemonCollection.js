
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokemonDisplay = pokemon.map((pokee) => (
    <PokemonCard key={pokee.id} name={pokee.name} hp={pokee.hp} sprites={pokee.sprites}/>
  ))


  return (
    <Card.Group itemsPerRow={6}>
        {pokemonDisplay.length > 0 ? pokemonDisplay : "No Pokemon Available" }
        {/* If input is > 0 is true: display the pokemon collection : if false: display "No Pokemon Avaialble" */}
    </Card.Group>
  );
}

export default PokemonCollection;
