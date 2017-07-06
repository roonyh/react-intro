import React from 'react';

class ProductRow extends React.Component {


  render() {
    const {name, price, outOfStock} = this.props;
    
    const nameStyles = {
      width: '80',
      color: outOfStock ? 'red' : 'black',
    }

    const priceStyles = {
      width: '80',
    }

    return (
      <tr>
        <td style={nameStyles}>{name}</td>
        <td style={priceStyles}>{'$' + price}</td>
      </tr>
    );
  }

}

export default ProductRow;
