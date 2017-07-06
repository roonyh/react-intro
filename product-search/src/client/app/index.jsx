import React from 'react';
import {render} from 'react-dom';
import ProductRow from './ProductRow.jsx';
import SearchBar from './SearchBar.jsx';
import data from './data.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterChecked: false
    }
  }

  onFilterCheck() {
    this.setState({filterChecked: !this.state.filterChecked})
  }

  render () {
    return (
      <div>
        <SearchBar checked={this.state.filterChecked} onCheck={e => this.onFilterCheck()}/>
        {
          data.map(obj => {
            // If we are filtering and the object is not stocked dont add it to the list
            if(this.state.filterChecked && !obj.stocked) {
              return;
            }

            return <ProductRow name={obj.name} price={obj.price} outOfStock={!obj.stocked}/>;
          })
        }
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
