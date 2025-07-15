import ListRow from '@/components/dashboard/RoadmapList/ListRow/ListRow.tsx';
import styled from '@emotion/styled';
import { color } from '@odyssey-horizon/ui';

interface RoadmapItem {
  id: string;
  title: string;
  location: '내 로드맵' | '팀 로드맵';
  lastModifiedAt: string;
  author: string;
  isFavorite: boolean;
}

interface RoadmapListProps {
  roadmaps: RoadmapItem[];
}

const RoadmapList = ({ roadmaps }: RoadmapListProps) => {
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
        {roadmaps?.map(roadmap => (
          <ListRow
            key={`ListRow-${roadmap.id}`}
            id={roadmap.id}
            title={roadmap.title}
            location={roadmap.location}
            createdAt={roadmap.lastModifiedAt}
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
