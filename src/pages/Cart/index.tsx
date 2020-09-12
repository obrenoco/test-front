import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api'

import {CartWrapper, Product, TotalCard,PriceItem, ButtomIcon, ProductsList } from './styles'

interface PriceParams {
  product: string;
}

interface Price {
  shippingTotal: number;
  subTotal: number;
  discount: number;
  total: number;
}

interface Product {
  id: string;
  items: {
    product: {
      name: string;
      imageObjects: {
        small: string;
      }
      priceSpecification: {
        price: number;
      }
    }
  }
}

const Cart: React.FC = () => {
  const [price, setPrice] = useState<Price | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const { params } = useRouteMatch<PriceParams>()

  useEffect(() => {
    api.get('').then((response) => {
      setProducts(response.data)
      console.log(response.data)
    })

    api.get('').then((response) => {
      setPrice(response.data)
    })
  }, [params.product]);

  // Total price hightlight
  return (
    <>
      <h1>Cart</h1>
      <CartWrapper>
        {/* <Cards /> */}
          <h2>Produtos</h2>
          <ProductsList>
              <Product >
                <img
                  src=""
                  alt=""
                />
                <div>
                  <p>L'oreal Professionnel Expert Absolut Repair Cortex Lipidium</p>
                  <strong>R$ 299,00</strong>
                </div>
              </Product>
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
