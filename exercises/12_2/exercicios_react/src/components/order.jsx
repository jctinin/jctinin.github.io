import React from 'react';

class Order extends React.Component {
    render() {
      const { user, product, price } = this.props.order; // Desestruturou o objeto order, dessa forma, consegue utilizar os items como variaveis
        
      return (
        <div className="order">
          <p> {user} bought {product} for {price.value} {price.currency} </p>
        </div>
      );
    }
  }

  export default Order;