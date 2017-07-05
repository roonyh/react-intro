import React from 'react';
import {render} from 'react-dom';
import ProductRow from './ProductRow.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <ProductRow name='foot ball' price={49.99}/>
        <ProductRow name='basket ball' price={9.99} outOfStock={true}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
