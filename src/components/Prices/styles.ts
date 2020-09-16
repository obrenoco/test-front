import styled from 'styled-components';

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
