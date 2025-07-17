import NavSidebar from '@/components/common/NavSidebar/NavSidebar.tsx';
import styled from '@emotion/styled';
import { Header, HorizonLogo, RoadmapSidebar, color } from '@odyssey-horizon/ui';
import Link from 'next/link';
import React from 'react';

interface Roadmap {
  id: number;
  title: string;
}

interface Directory {
  id: number;
  name: string;
  parentId: number;
  directories: Directory[];
  roadmaps: Roadmap[];
}

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  button?: {
    text: string;
    leftIcon: string;
    onClick: () => void;
  };
  roadmapData?: {
    directories: Directory[];
    roadmaps: Roadmap[];
  };
}

const AppLayout = ({ children, title, button, roadmapData }: AppLayoutProps) => {
  return (
    <StyledAppLayout>
      <LogoBox>
        <Link href='/'>
          <HorizonLogo height='40px' />
        </Link>
      </LogoBox>
      <HeaderBox>
        <Header title={title} button={button} />
      </HeaderBox>
      <Sidebar>
        <NavSidebar size={roadmapData ? 'small' : 'big'} />
        {roadmapData && <RoadmapSidebar data={roadmapData} />}
      </Sidebar>
      <MainBox>
        <main style={{ height: '100%', width: '100%' }}>{children}</main>
      </MainBox>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-areas:
        "logo header"
        "sidebar main";
    grid-template-rows: 64px 1fr;
    grid-template-columns: 266px 1fr;
    width: 100vw;
    height: 100vh;
`;

const LogoBox = styled.div`
    grid-area: logo;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-right: 1px solid ${color.grayscale['100']};
    border-bottom: 1px solid ${color.grayscale['100']};
`;

const HeaderBox = styled.div`
    grid-area: header;
`;

const Sidebar = styled.div`
    grid-area: sidebar;
    display: flex;
    overflow-y: hidden;
`;

const MainBox = styled.div`
    grid-area: main;
    overflow: auto;
`;
