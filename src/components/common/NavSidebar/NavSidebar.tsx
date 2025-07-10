'use client';

import styled from '@emotion/styled';
import { Column, Row, Text, color } from '@odyssey-horizon/ui';
import { ETC_ITEMS, MAIN_ITEMS } from './NavSidebar.constants';
import { SidebarItem } from './SidebarItem/SidebarItem';

type Size = 'small' | 'big';

interface NavSidebarProps {
  size?: Size;
}

const NavSidebar = ({ size = 'big' }: NavSidebarProps) => {
  return (
    <StyledSidebar size={size}>
      <Column gap='10px' padding='10px 12px'>
        <Text variant='B_M_12' color={color.grayscale['400']} style={{ marginLeft: '8px' }}>
          메인
        </Text>
        <Column gap='10px'>
          {MAIN_ITEMS.map(({ name, icon, to }) => (
            <SidebarItem key={to} size={size} icon={icon} to={to}>
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
            <SidebarItem key={to} size={size} icon={icon} to={to}>
              {name}
            </SidebarItem>
          ))}
        </Column>
      </Column>
    </StyledSidebar>
  );
};

export default NavSidebar;

interface StyledSidebarProps {
  size: Size;
}

const StyledSidebar = styled.div`
  width: ${({ size }: StyledSidebarProps) => (size === 'big' ? '100%' : 'auto')};
  background: ${color.white};
  border-right: 1px solid ${color.grayscale['100']};
  box-sizing: border-box;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${color.grayscale['100']};
  width: 100%;
`;
