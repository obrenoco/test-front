import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { isTemplateSpan } from 'typescript';

import api from '../../services/api'

import {CartWrapper, Product, TotalCard,PriceItem, ButtomIcon, ProductsList } from './styles'

interface Price {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
}

interface ItemImage {
  small: string;
}
interface Item {
    id: string;
    product: {
      sku: string;
      name: string;
      imageObjects: Array<ItemImage>
      priceSpecification: {
        price: number;
      }
    }
  }

const Cart: React.FC = () => {
  const [price, setPrice] = useState<Price | null>(null);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('5b15c4923100004a006f3c07').then((response) => {
      setItems(response.data.items)
      console.log(response.data.items)
    })
    api.get('5b15c4923100004a006f3c07 ').then((response) => {
      setPrice(response.data)
    })
  }, []);

  // Total price hightlight
  return (
    <>
      <h1>Cart</h1>
      <CartWrapper>
        {/* <Cards /> */}
          <h2>Produtos</h2>
          <ProductsList>
            {items.map(item => (
              <Product key={item.id}>
                <img
                  src={item.product.imageObjects[0].small}
                  alt={item.product.name}
                />
                <div>
                  <p>{item.product.name}</p>
                  <strong>R$ {item.product.priceSpecification.price}</strong>
                </div>
              </Product>
            ))}
          </ProductsList>
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
        <ButtomIcon>
          Seguir para o pagamento
        </ButtomIcon>
      </CartWrapper>
    </>
  )
};

export default Cart;
