import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Product, ProductsCard } from './styles'

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


const ProductsList: React.FC = () => {

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
    <ProductsCard>
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
    </ProductsCard>
  );
};

export default ProductsList;
