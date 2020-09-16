import styled from 'styled-components';


export const HeaderWrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: #FFFF;
  box-shadow: 0px 3px 5px -1px rgba(0,0,29,0.22);
  margin-bottom: 10px;
  ul {
    margin: 0 auto;
    max-width: 740px;
    display:flex;
    justify-content:space-between;
    align-items: center;

    li{
      padding: 12px 22px;
      list-style:none;
    }
  }
`;

export const Active = styled.text`
  color:${props => props.color};
  font-size: 13px;
  text-transform:uppercase;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;
