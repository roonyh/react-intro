import React from 'react';

class ProductRow extends React.Component {

  render() {
    const nameStyles = {
      width: '80',
      color: this.props.outOfStock ? 'red' : 'black',
    }

    const priceStyles = {
      width: '80',
    }

    return (
      <tr>
        <td style={nameStyles}>{this.props.name}</td>
        <td style={priceStyles}>{'$' + this.props.price}</td>
      </tr>
    );
  }

}

export default ProductRow;
