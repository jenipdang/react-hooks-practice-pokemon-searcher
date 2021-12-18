import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])



  useEffect(() => {
    fetch ('http://localhost:3001/pokemon')
    .then (res => res.json())
    .then((pokeData) => {
      setPokemon(pokeData)
    }).catch((err) => {
      alert(err)
    });
  }, [])
 
  const searchHandler = (search) => {
    // console.log(search) testing to to see if the input is logging in the console
    setSearch(search)
    if(search !== "") {
      const newPokemon = pokemon.filter((pokee) => {
        return (Object.values(pokee) //get the object values
          .join(" ")) // make a join on the values
          .toLocaleLowerCase() // make it into all lowercase
          .includes(search.toLocaleLowerCase()) //check if it includes or not. if yes, return true
      })
      setSearchResult(newPokemon)
    } else {
      setSearchResult(pokemon)
    }

    //add new Pokemon
    // const handleAddNewPokemon = async (pokee) => {
    //   const res = await fetch ('http://localhost:3001/pokemon', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(pokee)
    //   })
    //   const data = await res.json()
    //   setNewPokemonCollection([...pokemon, data])
    // }

    // const handleSubmit = (pokemon) => {
    //   const pokeeWithId = {...pokemon, id: pokemon.slice(-1)[0].id + 1}
    //   setPokemon(currentPokemon => [...currentPokemon, pokeeWithId])
    // }
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search pokemon={pokemon} term={search} searchKeyword={searchHandler} />
      <br />
      <PokemonCollection pokemon={search.length < 1 ? pokemon : searchResult} />
      {/* passing the condition for the search. If search input and the lenght is < 1, then pass the pokeman. If not, pass the search result */}

    </Container>
  );
}

export default PokemonPage;
