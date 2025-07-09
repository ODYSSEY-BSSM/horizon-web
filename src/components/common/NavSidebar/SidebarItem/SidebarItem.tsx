'use client';

import styled from '@emotion/styled';
import { color } from '@odyssey-horizon/ui';
import { Icon, Row, Text } from '@odyssey-horizon/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarItemProps {
  children: ReactNode;
  icon: string;
  to: string;
}

export const SidebarItem = ({ children, icon, to }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <StyledSidebarItem selected={isActive} href={to}>
      <Row gap='8px' alignItems='center'>
        <Icon
          name={icon}
          variant='Stroke_L_24'
          style={{
            color: isActive ? color.primary['500'] : color.grayscale['600'],
          }}
        />
        <Text variant='B_M_14' color={isActive ? color.primary['500'] : color.grayscale['600']}>
          {children}
        </Text>
      </Row>
    </StyledSidebarItem>
  );
};

interface StyledSidebarItemProps {
  selected: boolean;
}

const StyledSidebarItem = styled(Link)<StyledSidebarItemProps>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? color.primary['100'] : color.white)};

  &:hover {
    text-decoration: none;
    background-color: ${({ selected }) =>
      selected ? color.primary['100'] : color.grayscale['100']};
  }
`;
