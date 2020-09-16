import React from 'react';
import Header from '../../components/Header';
import Prices from '../../components/Prices';
import { PaymentWrapper, ButtonIcon } from './styles';

const Payment: React.FC = () => {

  const textButton = 'Finalizar o pedido';

  return (
    <>
      <Header />
      <PaymentWrapper>
        <h2>Cartão de crédito</h2>
        <Prices />
        <ButtonIcon to="/confirmation">
          {textButton}
        </ButtonIcon>
      </PaymentWrapper>
    </>
  );
}

export default Payment;
