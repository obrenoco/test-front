import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaymentWrapper = styled.div`
  padding: 10px;
  h2 {
    height: 17px;
    text-transform: uppercase;
    display: flex;
    margin: 5px 20px;
    flex-grow: 1;
    color: #999;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
  }
`;

export const PaymentCard = styled.div`
  margin: 0 auto;
  padding: 0.1px 12px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  div {
    margin: 12px 0;
    :nth-of-type(3n) {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      grid-gap: 20px;
    }
  }
  p {
    color: #CCC;
    font-size: 12px;
    margin: 0 0 5px 1px;
    font-family: Helvetica Neue;
    line-height: 14px;
    font-weight: bold;
  }
  input {
    width: 100%;
    height: 45px;
    border: solid #E7E7E7;
    box-shadow: inset 0 0 1px 0px rgba(0,0,0,0.2);
    border-radius: 3px;
    padding: 13px;
    font-size: 16px;
    ::placeholder {
      color: #E7E7E7;
      letter-spacing: 1.37px;
    }
    :focus {
      border: solid #A43287;
    }
  }
`;



export const ButtonIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 3px;
  background-color: #FF6C00;
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
  color: #FFF;
  font-family: "Helvetica Neue";
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  :hover{
    background: #D45A00;
  }
`;
