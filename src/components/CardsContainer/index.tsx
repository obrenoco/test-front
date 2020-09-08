import React from 'react';
import ProductCard from '../../components/ProductCard'

import { Container, Title, Cards } from './styles';

const CardsContainer: React.FC = () => {
  return (
    <Container>
      <Title>Produtos</Title>
      <Cards>
        <ProductCard />
        <ProductCard />
      </Cards>
    </Container>
  );
};

export default CardsContainer;
