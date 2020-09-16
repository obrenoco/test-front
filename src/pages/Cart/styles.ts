import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartWrapper = styled.div`
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


// Product Card
export const ProductsList = styled.div`
  margin: 0 auto;
  padding: 0.1px 12px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;

export const Product = styled.div`
  margin: 15px auto;
  height: 90px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #eee;
  img {
    height: 65px;
    width: 65px;
    margin: 11px 11px 14px;
    justify-content: center;
  }
  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 12px;
    padding: 12px 0;
  }
  strong {
    height: 17px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
    text-align: right;
    margin-bottom: 2px;
  }
  p {
    height: 32px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
  }
`;


// Total Card
export const TotalCard = styled.div`
  padding: 6px 13px 13px 14px;
  margin: 20px auto;
  height: 129px;
  box-sizing: border-box;
  height: 129px;
  border-radius: 3px;
  border: 1px solid #CCC;
`;

export const PriceItem = styled.div`
  margin: 9px 0;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  font-family: "Helvetica Neue";
  font-size: 14px;
  letter-spacing: NaNpx;
  color: ${props => props.theme.main};
`;

// Button
export const ButtomIcon = styled(Link)`
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
