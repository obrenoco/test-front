import React from 'react';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import Prices from '../../components/Prices'

import {CartWrapper, ButtonIcon } from './styles'

const Cart: React.FC = () => {

  const textButton = 'Seguir para o pagamento';

  return (
    <>
      <Header />
      <CartWrapper>
        <h2>Produtos</h2>
        <ProductsList />
        <Prices />
        <ButtonIcon to="/payment">
          {textButton}
        </ButtonIcon>
      </CartWrapper>
    </>
  )
};

export default Cart;
