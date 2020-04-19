import React, { useEffect, useContext, useState } from 'react';
import { navigate } from '@reach/router';

import quoteService from './services/quote';

import CharacterContext from './CharacterContext';

export default function Quote() {
  // eslint-disable-next-line no-unused-vars
  const [_, setWiki] = useContext(CharacterContext);
  const [quote, setQuote] = useState();

  useEffect(
    function () {
      quoteService().then(function (quote) {
        setWiki({ wiki: quote.wiki });
        setQuote(quote);
      }, console.error);
    },
    [setQuote, setWiki]
  );

  const handleClick = () => {
    navigate('/details');
  };

  const { character, mainImage, quote: characterQuote } = quote || {};

  if (!quote) {
    return (
      <div className="quote">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="quote">
      <div className="image-container">
        <img src={mainImage} alt={character} />
      </div>
      <div className="info">
        <h1>{character}</h1>
        <h2>{characterQuote}</h2>
        <button onClick={handleClick}>Details</button>
      </div>
    </div>
  );
}
