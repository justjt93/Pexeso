import React, { useState } from "react";
import Card from "./Card.jsx";
import { randomizedPexeso } from "../randomizedPexeso.js";

const App = () => {
  const [matchedCards, setMatchedCards] = useState([]);
  const [lastCardClicked, setLastCardClicked] = useState(false);
  const [animationOngoing, setAnimationOngoing] = useState(false);

  let cards = randomizedPexeso
    ? randomizedPexeso.map((cardURL, index) => {
        const card = { url: cardURL, id: index };

        return (
          <Card
            card={card}
            key={card.id}
            clicked={matchedCards.includes(card.id)}
            lastCardClicked={lastCardClicked}
            setLastCardClicked={setLastCardClicked}
            setMatchedCards={setMatchedCards}
            setAnimationOngoing={setAnimationOngoing}
            animationOngoing={animationOngoing}
          />
        );
      })
    : "loading";

  return <div className='board'>{cards}</div>;
};

export default App;
