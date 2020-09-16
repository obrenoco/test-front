import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import {CartWrapper, Product, TotalCard,PriceItem, ButtomIcon, ProductsList, Header, Active } from './styles'

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
interface ItemImage {
  small: string;
}

interface Price {
  shippingTotal: number,
  subTotal: number,
  discount: number,
  total: number,
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const storagedItems = localStorage.getItem(
      '@BelezaNaWeb:products',
    )

    if (storagedItems) {
      return JSON.parse(storagedItems);
    } else {
      return []
    }
  });

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
      '@BelezaNaWeb:products',
      JSON.stringify(items),
    )
  },[items]);

  useEffect(() => {
    localStorage.setItem(
      '@BelezaNaWeb:prices',
        JSON.stringify(price),
    )
  }, [price]);

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


  const path =  window.location.pathname;
  const ActiveTab = "#FF7800";
  const Inactive = "#ccc";
  // Total price hightlight
  return (
    <>
      {/* <Header /> */}
      <Header>
        <ul>
          <li><Active color={path === "/" ? ActiveTab:Inactive}>Sacola</Active></li>
          <li><Active color={path.match('/payment') ? ActiveTab:Inactive}>Pagamento</Active></li>
          <li><Active color={path.match('/confirmation') ? ActiveTab:Inactive}>Confirmação</Active></li>
        </ul>
      </Header>

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
