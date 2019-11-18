import React from "react";

const Card = props => {
  const {
    card,
    clicked,
    lastCardClicked,
    setLastCardClicked,
    setMatchedCards,
    setAnimationOngoing,
    animationOngoing
  } = props;

  const handleClick = () => {
    if (animationOngoing) {
      return;
    }

    if (lastCardClicked.url === card.url && lastCardClicked != card) {
      setMatchedCards(prevState =>
        prevState.concat(card.id, lastCardClicked.id)
      );
      setLastCardClicked(false);
    }
    // cards do not match, prevCard was clicked
    else if (lastCardClicked) {
      setLastCardClicked(false);
      setMatchedCards(prevState => prevState.concat(card.id));
      setAnimationOngoing(true);
      setTimeout(() => {
        setAnimationOngoing(false);
        setMatchedCards(prevState => prevState.slice(0, -2));
      }, 1000);
    }
    // no prevCard
    else {
      setMatchedCards(prevState => prevState.concat(card.id));
      setLastCardClicked(card);
    }
  };

  return (
    <div className='flip-card' onClick={handleClick}>
      <div className={`flip-card-inner ${clicked ? "clicked" : ""}`}>
        <div className='flip-card-front'>
          <img
            src={
              "https://www.zatrolene-hry.cz/galerie/4648/main.large.jpg?fa32af84cec710b1fbc46d9ecd376ae3"
            }
          />
        </div>
        <div className='flip-card-back'>
          <img src={card.url} />
        </div>
      </div>
    </div>
  );
};

export default Card;
