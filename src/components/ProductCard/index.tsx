import React from 'react';

import { Product, Title, Price } from './styles';

const ProductCard: React.FC = () => {
  return (
    <Product>
      <img
        src="https://i.imgur.com/0Hd73Qe.png"
        alt="L'oreal Professionnel"
      />
      <div>
        <Title>L'oreal Professionnel Expert Absolut Repair Cortex Lipidium</Title>
        <Price>RS 299,00</Price>
      </div>
    </Product>
  );
};

export default ProductCard;
