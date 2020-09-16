import React from 'react';

import { HeaderWrapper, Active } from './styles';

const Header: React.FC = () => {
  const path =  window.location.pathname;
  const ActiveTab = "#FF7800";
  const Inactive = "#ccc";

  return (
    <HeaderWrapper>
      <ul>
        <li><Active color={path === "/" ? ActiveTab:Inactive}>Sacola</Active></li>
        <li><Active color={path.match('/payment') ? ActiveTab:Inactive}>Pagamento</Active></li>
        <li><Active color={path.match('/confirmation') ? ActiveTab:Inactive}>Confirmação</Active></li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
