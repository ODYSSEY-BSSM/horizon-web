import styled from '@emotion/styled';
import { Column, Icon, Row, Text, color } from '@odyssey-horizon/ui';
import Link from 'next/link';

interface LastActiveProps {
  description: string;
  title: string;
  to?: string;
}

const LastActive = ({ description, title, to }: LastActiveProps) => {
  return (
    <StyledLastRoadmap href={to || ''}>
      <Row gap='20px' alignItems='center'>
        <Row width='100px' justifyContent='center' alignItems='center'>
          <RoadmapIconBox>
            <Text variant={'B_M_12'} color={color.white}>
              Roadmap
            </Text>
          </RoadmapIconBox>
        </Row>
        <Column>
          <Text variant='B_M_12' color={color.black}>
            {description}
          </Text>
          <Text variant='B_M_16' color={color.primary['500']}>
            {title}
          </Text>
        </Column>
      </Row>
      <Icon name='chevron_right' variant='Fill_R_24' style={{ color: color.primary['500'] }} />
    </StyledLastRoadmap>
  );
};

export default LastActive;

const StyledLastRoadmap = styled(Link)`
    width: 352px;
    height: 80px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid ${color.grayscale['100']};
    border-radius: 8px;
`;

const RoadmapIconBox = styled.div`
    background-color: ${color.primary['500']};
    padding: 2px 4px;
    border-radius: 2px;
`;
