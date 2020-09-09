import React from 'react';
import Cards from '../../components/Cards'
import Total from '../../components/Total'

import {Container} from './styles'

const Cart: React.FC = () => (
  <>
    <h1>Cart</h1>

    <Container>
      <Cards />
      <Total />
    </Container>
  </>
);

export default Cart;
