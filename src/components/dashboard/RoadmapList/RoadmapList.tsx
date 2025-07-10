import ListRow from '@/components/dashboard/RoadmapList/ListRow/ListRow.tsx';
import styled from '@emotion/styled';
import { color } from '@odyssey-horizon/ui';
import { useEffect, useState } from 'react';

interface RoadmapItem {
  id: string;
  title: string;
  location: '내 로드맵' | '팀 로드맵';
  createdAt: string;
  author: string;
  isFavorite: boolean;
}

const RoadmapList = () => {
  const [roadmaps, setRoadmaps] = useState<RoadmapItem[]>([]);

  const mockRoadmaps: RoadmapItem[] = [
    {
      id: '1',
      title: '프론트엔드 기초',
      location: '내 로드맵',
      createdAt: '2025.05.08',
      author: '서현규',
      isFavorite: false,
    },
    {
      id: '2',
      title: '백엔드 기초',
      location: '내 로드맵',
      createdAt: '2025.05.08',
      author: '서현규',
      isFavorite: false,
    },
    {
      id: '3',
      title: 'UX/UI',
      location: '내 로드맵',
      createdAt: '2025.05.08',
      author: '서현규',
      isFavorite: true,
    },
    {
      id: '4',
      title: '리액트 플러수',
      location: '내 로드맵',
      createdAt: '2025.05.08',
      author: '서현규',
      isFavorite: false,
    },
  ];

  useEffect(() => {
    setRoadmaps(mockRoadmaps);
  }, []);

  return (
    <StyledRoadmapList>
      <ListHeader>
        <div />
        <div>이름</div>
        <div>유형</div>
        <div>마지막 수정</div>
        <div>작성자</div>
        <div />
      </ListHeader>
      <ListBody>
        {roadmaps.map(roadmap => (
          <ListRow
            key={`ListRow-${roadmap.id}`}
            id={roadmap.id}
            title={roadmap.title}
            location={roadmap.location}
            createdAt={roadmap.createdAt}
            author={roadmap.author}
            isFavorite={roadmap.isFavorite}
          />
        ))}
      </ListBody>
    </StyledRoadmapList>
  );
};

export default RoadmapList;

const StyledRoadmapList = styled.div`
  width: 100%;
  min-height: 0;
  flex: 1;
  border: 1px solid ${color.grayscale['100']};
  border-radius: 8px;
  background-color: ${color.white};
  overflow: hidden;
  display: flex;
    flex-direction: column;
`;

const ListHeader = styled.div`
    display: grid;
    grid-template-columns: 52px 1fr 184px 186px 186px 50px;
    gap: 16px;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 600;
    color: ${color.grayscale['600']};
    border-bottom: 1px solid ${color.grayscale['100']};
`;

const ListBody = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
`;
