import React from 'react';

class ProductRow extends React.Component {

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
        <input type="text" style={textStyles}/>
        <input id='in-stock-check' type="checkbox" />
        <label htmlFor='in-stock-check'>{'Only show products in stock'}</label>
      </div>
    );
  }

}

export default ProductRow;
