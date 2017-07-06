import React from 'react';

class SearchBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    const searchStyles = {
      width: '250',
      padding: '15px'
    }

    const textStyles = {
      width: '150',
      display: 'block'
    }

    return (
      <div style={searchStyles}>
        <input type="text" style={textStyles} value="ssss"/>
        <input id='in-stock-check' type="checkbox" checked={this.props.checked}
           onChange={this.props.onCheck}/>
        <label htmlFor='in-stock-check'>{'Only show products in stock..'}</label>
      </div>
    );
  }

}

export default SearchBar;
