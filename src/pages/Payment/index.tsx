import React from 'react';
import Header from '../../components/Header';
import Prices from '../../components/Prices';
import { PaymentWrapper, PaymentCard , ButtonIcon } from './styles';

const Payment: React.FC = () => {

  const textButton = 'Finalizar o pedido';

  return (
    <>
      <Header />
      <PaymentWrapper>
        <h2>Cartão de crédito</h2>

        <PaymentCard>
          <div>
            <p>Número de cartão</p>
            <input type="text" placeholder="____.____.____.____" />
          </div>
          <div>
            <p>Nome do titular</p>
            <input type="text" placeholder="Como no cartão" />
          </div>
          <div>
            <div>
              <p>Validade (mês/ano)</p>
              <input type="text" placeholder="__/____"/>
            </div>
            <div>
              <p>CVV</p>
              <input type="text" placeholder="__/____"/>
            </div>
          </div>


        </PaymentCard>

        <Prices />
        <ButtonIcon to="/confirmation">
          {textButton}
        </ButtonIcon>
      </PaymentWrapper>
    </>
  );
}

export default Payment;
