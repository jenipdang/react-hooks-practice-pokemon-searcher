import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites }) {
  
  const [isFront, setIsFront] =useState(true)

  return (
    <Card onClick={()=> setIsFront(!isFront)}>
      <div >
        <div className="image">
          {isFront ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="oh no!"/>}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
