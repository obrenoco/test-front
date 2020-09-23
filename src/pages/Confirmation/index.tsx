import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import Prices from '../../components/Prices'
import successIcon from '../../assets/img/success.png'

import {ConfirmationWrapper, SuccessMsg, PaymentInfoCard, SimpleProductsList } from './styles'
import api from '../../services/api';

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



const Confirmation: React.FC = () => {
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

  useEffect(() => {
    localStorage.setItem(
      '@BelezaNaWeb:products',
      JSON.stringify(items),
    )
  },[items]);


  useEffect(() => {
    api.get('5b15c4923100004a006f3c07').then((response) => {
      setItems(response.data.items)
    })
  }, []);
  return (
    <>
      <Header />
      <ConfirmationWrapper>
        <SuccessMsg>
          <img src={successIcon} alt="Compra efetuada com sucesso"/>
          <p>Compra efetuada com sucesso</p>
        </SuccessMsg>

        <h2>Pagamento</h2>
        <PaymentInfoCard>
          <p>****.****.****.1234</p>
          <p>José da Silva</p>
          <p>05/2019</p>
        </PaymentInfoCard>

        <h2>Produtos</h2>
        <SimpleProductsList>
          {items.map(item => {
            return(
            <div>
              <img src={item.product.imageObjects[0].small} alt=""/>
              <p>{item.product.name}</p>
            </div>
          )})}
        </SimpleProductsList>

        <Prices />
      </ConfirmationWrapper>
    </>
  )
}

export default Confirmation




