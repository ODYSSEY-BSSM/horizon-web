import styled from '@emotion/styled';
import { Icon, Row, Text, color, font } from '@odyssey-horizon/ui';
import { useState } from 'react';

interface RoadmapSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const RoadmapSearch = ({ searchTerm, setSearchTerm }: RoadmapSearchProps) => {
  const [activeTab, setActiveTab] = useState('전체');

  const tabs = ['전체', '내 로드맵', '팀 로드맵'];

  return (
    <StyledRoadmapSearch>
      <Row gap='8px' alignItems='center'>
        <Icon name='search' variant='Stroke_R_24' style={{ color: color.grayscale['200'] }} />
        <SearchInput
          type='text'
          placeholder='로드맵 찾기'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Row>

      <Row gap='8px' alignItems='center'>
        {tabs.map(tab => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            <Text variant='B_M_16' color={activeTab === tab ? color.white : color.grayscale['400']}>
              {tab}
            </Text>
          </Tab>
        ))}
      </Row>
    </StyledRoadmapSearch>
  );
};

export default RoadmapSearch;

const StyledRoadmapSearch = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid ${color.grayscale['100']};
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    font-size: 14px;
    outline: none;
    
    &:focus {
        border-color: ${color.primary['500']};
    }
    
    &::placeholder {
        color: ${color.grayscale['400']};
        font-size: ${font.fontSize['12']};
    }
`;

const Tab = styled.button<{ active: boolean }>`
    padding: 4px 12px;
    border-radius: 8px;
    background-color: ${({ active }) => (active ? color.primary['500'] : color.white)};
    cursor: pointer;
`;
