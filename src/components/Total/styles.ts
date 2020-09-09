import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px 13px 13px 14px;
  margin: 20px auto;
  height: 129px;
  box-sizing: border-box;
  height: 129px;
  border-radius: 3px;
  border: 1px solid #CCC;
`;
export const PriceList = styled.div`
  height: 100%;
`;
export const PriceItem = styled.div`
  margin: 9px 0;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  letter-spacing: NaNpx;
`;
export const Discount = styled.div`
  margin: 9px 0;
  text-transform: uppercase;
  color: #FF7800;
  display: flex;
  justify-content: space-between;
  font-family: "Helvetica Neue";
  font-size: 14px;
  letter-spacing: NaNpx;
`;

export const TotalPrice = styled.div`
  text-transform: uppercase;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  letter-spacing: NaNpx;
  font-weight: 700;
`;
