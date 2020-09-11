import React from 'react';

import {CartWrapper, CardsWrapper, ProductTitle, ItemTitle, CardList, Price, Product, TotalCard, PriceList, PriceItem, TotalPrice, Discount, ButtomIcon } from './styles'

const Cart: React.FC = () => (
  <>
    <h1>Cart</h1>

    <CartWrapper>

      {/* <Cards /> */}
      <CardsWrapper>
        <ProductTitle>Produtos</ProductTitle>
        <CardList>
          <Product>
            <img
              src="https://i.imgur.com/0Hd73Qe.png"
              alt="L'oreal Professionnel"
            />
            <div>
              <ItemTitle>L'oreal Professionnel Expert Absolut Repair Cortex Lipidium</ItemTitle>
              <Price>R$ 299,00</Price>
            </div>
          </Product>
        </CardList>
      </CardsWrapper>


      {/* <Total /> */}
      <TotalCard>
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
            <p>- R$ 30,0</p>
          </Discount>

          <TotalPrice>
            <p>Total</p>
            <p>R$ 600,10</p>
          </TotalPrice>
        </PriceList>

      </TotalCard>


      {/* <Buttom /> */}
      <ButtomIcon>
        Seguir para o pagamento
      </ButtomIcon>
    </CartWrapper>
  </>
);

export default Cart;
