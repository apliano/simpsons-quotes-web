import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import Quote from './Quote';
import Details from './Details';
import CharacterContext from './CharacterContext';

const App = function App() {
  const characterHook = useState();

  return (
    <React.StrictMode>
      <div>
        <header id="important">
          <Link to="/">The Simpsons</Link>
        </header>
        <CharacterContext.Provider value={characterHook}>
          <Router>
            <Quote path="/" />
            <Details path="/details"></Details>
          </Router>
        </CharacterContext.Provider>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
