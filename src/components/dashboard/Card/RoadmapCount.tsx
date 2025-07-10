import styled from '@emotion/styled';
import { Column, Icon, Row, Text, color } from '@odyssey-horizon/ui';
import Link from 'next/link';

interface RoadmapCountProps {
  title: string;
  count: number;
  to?: string;
  lastModify: string;
}

const RoadmapCount = ({ title, count, to, lastModify }: RoadmapCountProps) => {
  return (
    <StyledRoadmapCount>
      <Row gap='20px' alignItems='center'>
        <IconBox>
          <Icon name='storage' variant='Stroke_R_24' style={{ color: color.white }} />
        </IconBox>
        <Column>
          <Text variant='B_M_12'>
            {title} <span style={{ color: color.primary['500'] }}>{count}개</span>
          </Text>
          <Text variant='B_M_8' color={color.grayscale['400']}>
            마지막 수정: {lastModify}
          </Text>
        </Column>
      </Row>
      <Link href={to || ''}>
        <Row alignItems='center'>
          <Text variant='B_M_14' color={color.primary['500']}>
            보러가기
          </Text>
          <Icon name='chevron_right' variant='Fill_R_24' style={{ color: color.primary['500'] }} />
        </Row>
      </Link>
    </StyledRoadmapCount>
  );
};

export default RoadmapCount;

const StyledRoadmapCount = styled.div`
    height: 80px;
    width: 364px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const IconBox = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.primary['300']};
    border-radius: 50%;
`;
