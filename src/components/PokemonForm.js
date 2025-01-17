import React, {useState} from "react";
import { Form } from "semantic-ui-react";


const PokemonForm = ({handleNewPokemon}) => {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFrontUrl] = useState("")
  const [back, setBackUrl] = useState("")
 

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "" || front.trim() === "" || hp.trim() === "" || back.trim() === ""){
      alert("Please Fill Out All Fields") //
      return null
    }

    const newPokee = { name, hp, sprites: {front, back} }

    fetch('http://localhost:3001/pokemon',{
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newPokee)
    })
    .then((r) => r.json())
    .then(handleNewPokemon)
    .catch((err) => {
      console.err("Error:", err)
    })

    setName("")
    setBackUrl("")
    setFrontUrl("")
    setHp("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      > 
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            onChange={(e) => setName(e.target.value)}
            value={name} 
            label="Name" 
            placeholder="Name" 
            name="name" 
          />
          <Form.Input 
            fluid 
            onChange={(e) => setHp(e.target.value)}
            value={hp} 
            label="hp" 
            placeholder="hp" 
            name="hp" />
          <Form.Input
            fluid
            onChange={(e) => setFrontUrl(e.target.value)}
            value={front}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={(e) => setBackUrl(e.target.value)}
            value={back}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
       <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
