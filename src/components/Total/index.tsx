import React from 'react';

import { Container, PriceList, PriceItem, TotalPrice, Discount } from './styles';

const Total: React.FC = () => {
  return (
    <Container>
      <PriceList>

        <PriceItem>
          <p>Produtos</p>
          <p>R$ 624,50</p>
        </PriceItem>

        <PriceItem>
          <p>Frete</p>
          <p>R$ 5,30</p>
        </PriceItem>

        <Discount>
          <p>Desconto</p>
          <p>R$ 30,0</p>
        </Discount>

        <TotalPrice>
          <p>Total</p>
          <p>R$ 600,10</p>
        </TotalPrice>
      </PriceList>

    </Container>
  );
};

export default Total;
