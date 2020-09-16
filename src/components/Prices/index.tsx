import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { TotalCard, PriceItem } from './styles';

interface Price {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
}

const Prices: React.FC = () => {
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

  return (
    <>
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
    </>
  );
}

export default Prices;
