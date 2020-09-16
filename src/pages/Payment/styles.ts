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
