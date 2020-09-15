import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import api from '../../services/api'

import {CartWrapper, Product, TotalCard,PriceItem, ButtomIcon, ProductsList } from './styles'


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

interface Price {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
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

  const textButton = 'Seguir para o pagamento';

  // Total price hightlight
  return (
    <>
      <h1>Cart</h1>
      <CartWrapper>
        {/* <Cards /> */}
          <h2>Produtos</h2>
          <ProductsList>
            {items.map(item => (
              <Product key={item.product.sku}>
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
        <ButtomIcon to="/confirmation">
          {textButton}
        </ButtomIcon>
      </CartWrapper>
    </>
  )
};

export default Cart;
