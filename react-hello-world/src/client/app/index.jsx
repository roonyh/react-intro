import React from 'react';
import {render} from 'react-dom';
import CategoryRow from './CategoryRow.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <CategoryRow category={"something"} />
        <CategoryRow category={"sss"} />
        <CategoryRow category={"Electronics"} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
