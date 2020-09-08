import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
  height: 90px;
  width: 316px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 90px;
  width: 316px;
  border-radius: 3px;
  border: 1px solid gray;
  img {
    height: 65px;
    width: 65px;
    justify-content: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
  }
`;

export const Title = styled.text`
  height: 32px;
  width: 220px;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 13px;
  letter-spacing: NaNpx;
  line-height: 16px;
`;

export const Price = styled.text`
  height: 17px;
  width: 220px;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`;

