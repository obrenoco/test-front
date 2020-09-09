import React from 'react';

import { Container, Title, Price } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <img
        src="https://i.imgur.com/0Hd73Qe.png"
        alt="L'oreal Professionnel"
      />
      <div>
        <Title>L'oreal Professionnel Expert Absolut Repair Cortex Lipidium</Title>
        <Price>R$ 299,00</Price>
      </div>
    </Container>
  );
};

export default Product;
