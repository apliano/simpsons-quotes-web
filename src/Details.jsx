import React, { useContext } from 'react';

import CharacterContext from './CharacterContext';
import { redirectTo } from '@reach/router';

export default function Quote() {
  const [quote] = useContext(CharacterContext);

  if (!quote) {
    redirectTo('/');
  }

  return (
    <div className="details">
      <div
        className="wiki"
        dangerouslySetInnerHTML={{ __html: quote.wiki['*'] }}
      />
    </div>
  );
}
