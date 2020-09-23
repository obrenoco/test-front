import styled from 'styled-components';

export const ConfirmationWrapper = styled.div`
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
    margin-top: 20px;
  }
`;

export const SuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20.43px;
  p {
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    font-weight: 700;
    color: #FF7800;
  }
`;

export const PaymentInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  margin: 0 auto;
  height: 73px;
  padding: 0.1px 12px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`
export const SimpleProductsList = styled.div`
  font-size: 14px;
  margin: 0 auto;
  padding: 0.1px 12px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  div {
    margin: 15px auto;
    height: 64px;
    display: flex;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #eee;
  }
  img {
    height: 42px;
    width: 42px;
    margin: 11px 11px 14px;
    justify-content: center;
  }
  p {
    margin-top: 12px;
    color: #212122;
    font-size: 13px;
    line-height: 16px;
  }
`
