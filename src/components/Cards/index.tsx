import React from 'react';
import Product from '../../components/Product'

import { Container, Title, CardList } from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Title>Produtos</Title>
      <CardList>
        <Product />
        <Product />
      </CardList>
    </Container>
  );
};

export default Cards;
