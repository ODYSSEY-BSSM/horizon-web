'use client';

import NavSidebar from "@/components/common/NavSidebar/NavSidebar.tsx";
import GlobalStyle from '@/components/common/GlobalStyle/GlobalStyle.tsx';

export default function Home() {
  return (
    <>
      <div style={{width: '100vw', height: '100vh', display: 'flex'}}>
          <div style={{ width: '266px', height: '100vh'}}>
              <NavSidebar/>
          </div>
      </div>
    </>
  );
}