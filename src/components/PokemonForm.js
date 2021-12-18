import React, {useState} from "react";
import { Form } from "semantic-ui-react";


function PokemonForm() {
  const [values, setValues] = useState({
    name: "",
    hp: "", 
    frontImageUrl: "",
    backImageUrl: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleNameInputChange = (e) => {
    setValues({...values, name: e.target.value})
  }

  const handleHpInputChange = (e) => {
    setValues({...values, hp: e.target.value})
  }

  const handleFrontImageUrlInputChange = (e) => {
    setValues({...values, frontImageUrl: e.target.value})
  }

  const handleBackImageUrlInputChange = (e) => {
    setValues({...values, backImageUrl: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.name && values.hp && values.frontImageUrl && values.backImageUrl) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        {submitted && valid ? <div className="sucess-message">Success! New Pokemon added to the collection!</div> : null} 
        {/* If user submitted a new pokemon sucessfully ? display the success message : If not, display null (nothing) */}    
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            onChange={handleNameInputChange}
            value={values.name} 
            label="Name" 
            placeholder="Name" 
            name="name" 
          />
          <Form.Input 
            fluid 
            onChange={handleHpInputChange}
            value={values.hp} 
            label="hp" 
            placeholder="hp" 
            name="hp" />
          <Form.Input
            fluid
            onChange={handleFrontImageUrlInputChange}
            value={values.frontImageUrl} 
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={handleBackImageUrlInputChange}
            value={values.backImageUrl}
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
