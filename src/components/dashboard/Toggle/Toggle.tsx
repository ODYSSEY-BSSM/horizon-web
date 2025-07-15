import styled from '@emotion/styled';
import { Icon, Text, color } from '@odyssey-horizon/ui';
import React from 'react';

interface ToggleProps {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

const Toggle = ({ children, title, style }: ToggleProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <StyledToggle style={{ ...style }}>
      <TitleBox onClick={() => setIsOpen(prev => !prev)}>
        <Text variant='H_B_16' color={isOpen ? color.black : color.grayscale['400']}>
          {title}
        </Text>
        <Icon
          name={isOpen ? 'arrow_drop_down' : 'arrow_drop_up'}
          variant='Stroke_L_24'
          style={{ color: isOpen ? color.black : color.grayscale['400'] }}
        />
      </TitleBox>
      {isOpen && children}
    </StyledToggle>
  );
};

export default Toggle;

const StyledToggle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;
