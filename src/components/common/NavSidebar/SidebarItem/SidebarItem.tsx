'use client';

import styled from '@emotion/styled';
import { color } from '@odyssey-horizon/ui';
import { Icon, Row, Text } from '@odyssey-horizon/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Size = 'small' | 'big';

interface SidebarItemProps {
  children: ReactNode;
  icon: string;
  to: string;
  size: Size;
}

export const SidebarItem = ({ children, icon, to, size }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <StyledSidebarItem selected={isActive} href={to} size={size}>
      <Row gap='8px' alignItems='center'>
        <Icon
          name={icon}
          variant='Stroke_L_24'
          style={{
            color: isActive ? color.primary['500'] : color.grayscale['600'],
          }}
        />
        {size === 'big' && (
          <Text variant='B_M_14' color={isActive ? color.primary['500'] : color.grayscale['600']}>
            {children}
          </Text>
        )}
      </Row>
    </StyledSidebarItem>
  );
};

interface StyledSidebarItemProps {
  selected: boolean;
  size: Size;
}

const StyledSidebarItem = styled(Link)<StyledSidebarItemProps>`
  width: ${({ size }) => (size === 'big' ? '100%' : 'fit-content')};
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? color.primary['100'] : color.white)};

  &:hover {
    text-decoration: none;
    background-color: ${({ selected }) =>
      selected ? color.primary['100'] : color.grayscale['100']};
  }
`;
