import React from 'react';
import Cards from '../../components/Cards'
import Total from '../../components/Total'
import Buttom from '../../components/Buttom'

import {Container} from './styles'

const Cart: React.FC = () => (
  <>
    <h1>Cart</h1>

    <Container>
      <Cards />
      <Total />
    <Buttom />
    </Container>
  </>
);

export default Cart;
