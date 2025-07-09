import styled from '@emotion/styled'
import { color } from '@odyssey-horizon/ui'
import { Icon, Row, Text } from '@odyssey-horizon/ui'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SidebarItemProps {
  children: ReactNode
  icon: string
  to: string
}

export const SidebarItem = ({ children, icon, to }: SidebarItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <StyledSidebarItem to={to} selected={isActive}>
      <Row gap="8px" alignItems="center">
        <Icon
          name={icon}
          variant="Stroke_L_24"
          style={{
            color: isActive ? color.primary['500'] : color.grayscale['600'],
          }}
        />
        <Text variant="B_M_14" color={isActive ? color.primary['500'] : color.grayscale['600']}>
          {children}
        </Text>
      </Row>
    </StyledSidebarItem>
  )
}

interface StyledSidebarItemProps {
  selected: boolean
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
`
