import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Title = styled.text`
  height: 32px;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 13px;
  letter-spacing: NaNpx;
  line-height: 16px;
`;

export const Price = styled.text`
  height: 17px;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
  margin-bottom: 2px;
`;

