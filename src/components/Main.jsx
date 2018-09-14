import React from 'react';

const Main = props => (
  <div className="Main">
    <header className="Main_header">
      <h1 className="Main_title">Redux Observable Test</h1>
    </header>
    <main>
      <ul>
        {props.items.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}
      </ul>
      <button
        onClick={props.fetchItem}
      >Add Item</button>
    </main>
  </div>
);

export default Main;
