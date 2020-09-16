import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import api from '../../services/api';

import {CartWrapper, TotalCard,PriceItem, ButtomIcon } from './styles'
interface Price {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
}

const Cart: React.FC = () => {
  const [price, setPrice] = useState<Price | null>(() => {
    const storagedPrices = localStorage.getItem(
      '@BelezaNaWeb:prices',
    )

    if (storagedPrices) {
      return JSON.parse(storagedPrices);
    } else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@BelezaNaWeb:prices',
        JSON.stringify(price),
    )
  }, [price]);

  useEffect(() => {
    api.get('5b15c4923100004a006f3c07 ').then((response) => {
      setPrice(response.data)
    })
  }, []);

  const textButton = 'Seguir para o pagamento';

  return (
    <>
      <Header />
      <CartWrapper>

        {/* <Cards /> */}
        <h2>Produtos</h2>
        <ProductsList />

        {/* <Total /> */}
        <TotalCard>
          <PriceItem >
            <p>Produtos</p>
            <p>R$ {price?.subTotal}</p>
          </PriceItem>

          <PriceItem>
            <p>Frete</p>
            <p>R$ {price?.shippingTotal}</p>
          </PriceItem>

          <PriceItem theme={{main: "#FF7800"}}>
            <p>Desconto</p>
            <p>- R$ {price?.discount}</p>
          </PriceItem>

          <PriceItem>
            <strong>Total</strong>
            <strong>R$ {price?.total}</strong>
          </PriceItem>
        </TotalCard>

        {/* <Buttom /> */}
        <ButtomIcon to="/payment">
          {textButton}
        </ButtomIcon>
      </CartWrapper>
    </>
  )
};

export default Cart;
