'use client';

import LastActive from '@/components/dashboard/Card/LastActive.tsx';
import RoadmapCount from '@/components/dashboard/Card/RoadmapCount.tsx';
import RoadmapList from '@/components/dashboard/RoadmapList/RoadmapList.tsx';
import RoadmapSearch from '@/components/dashboard/RoadmapSearch/RoadmapSearch.tsx';
import Toggle from '@/components/dashboard/Toggle/Toggle.tsx';
import AppLayout from '@/layouts/AppLayout/AppLayout.tsx';
import styled from '@emotion/styled';
import { Column, Row, color } from '@odyssey-horizon/ui';
import { useState } from 'react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AppLayout title='대시보드'>
      <StyledDashboard>
        <Column width='1092px' height='95%' gap='40px'>
          <Toggle title='마지막 활동'>
            <Row gap='20px'>
              <LastActive
                title='웹 디자인 기초'
                to='/my-roadmaps/123123'
                description='마지막 로드맵'
              />
              <LastActive title='부산소마팀' to='/teams/123123' description='마지막 팀' />
            </Row>
          </Toggle>

          <Toggle title='로드맵 수'>
            <Row style={{ border: `1px solid ${color.grayscale['100']}`, borderRadius: '8px' }}>
              <RoadmapCount title='내 로드맵' count={7} lastModify='2025-05-08' to='/my-roadmaps' />
              <Divider />
              <RoadmapCount title='내 로드맵' count={7} lastModify='2025-05-08' to='/my-roadmaps' />
              <Divider />
              <RoadmapCount title='내 로드맵' count={7} lastModify='2025-05-08' to='/my-roadmaps' />
            </Row>
          </Toggle>

          <Toggle title='로드맵 찾기'>
            <Column gap='20px' style={{ minHeight: '0' }}>
              <RoadmapSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <RoadmapList />
            </Column>
          </Toggle>
        </Column>
      </StyledDashboard>
    </AppLayout>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${color.grayscale['100']};
`;
