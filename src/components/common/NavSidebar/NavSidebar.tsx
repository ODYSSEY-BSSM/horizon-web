'use client';

import styled from '@emotion/styled';
import { color, Column, HorizonLogo, Row, Text } from '@odyssey-horizon/ui';
import Link from 'next/link';
import { ETC_ITEMS, MAIN_ITEMS } from './NavSidebar.constants';
import { SidebarItem } from './SidebarItem/SidebarItem';

const NavSidebar = () => {
  return (
    <StyledSidebar>
      <LogoBox>
        <Row width='226px'>
          <Link href='/'>
            <HorizonLogo height='40px' />
          </Link>
        </Row>
      </LogoBox>
      <Column gap='10px' padding='10px 12px'>
        <Text variant='B_M_12' color={color.grayscale['400']} style={{ marginLeft: '8px' }}>
          메인
        </Text>
        <Column gap='10px'>
          {MAIN_ITEMS.map(({ name, icon, to }) => (
            <SidebarItem key={to} icon={icon} to={to}>
              {name}
            </SidebarItem>
          ))}
        </Column>
      </Column>
      <Row height='10px' alignItems='center'>
        <Divider />
      </Row>
      <Column gap='10px' padding='10px 12px'>
        <Text variant='B_M_12' color={color.grayscale['400']} style={{ marginLeft: '8px' }}>
          기타
        </Text>
        <Column gap='10px'>
          {ETC_ITEMS.map(({ name, icon, to }) => (
            <SidebarItem key={to} icon={icon} to={to}>
              {name}
            </SidebarItem>
          ))}
        </Column>
      </Column>
    </StyledSidebar>
  );
};

export default NavSidebar;

const StyledSidebar = styled.div`
  width: 266px;
  height: 100vh;
  background: ${color.white};
  border-right: 1px solid ${color.grayscale['100']};
  box-sizing: border-box;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${color.grayscale['100']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${color.grayscale['100']};
  width: 100%;
`;
