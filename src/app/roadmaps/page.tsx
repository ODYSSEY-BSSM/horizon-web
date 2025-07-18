'use client';

import AppLayout from '@/layouts/AppLayout/AppLayout.tsx';
import styled from '@emotion/styled';
import { Column, Icon, Text, color } from '@odyssey-horizon/ui';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRoadmapsData } from './Roadmaps.hook';

const Roadmaps = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { imageUrl, rootContents } = useRoadmapsData(id || undefined);

  const buttonClickHandler = () => {
    window.location.href = `http://localhost:5173${id ? `?roadmapId=${id}` : ''}`;
  };

  return (
    <AppLayout
      title='내 로드맵'
      button={{ text: '로드맵 수정', leftIcon: 'edit', onClick: buttonClickHandler }}
      roadmapData={rootContents || { directories: [], roadmaps: [] }}
    >
      <StyledRoadmaps>
        {id ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {imageUrl?.url && (
              <Image
                fill
                src={`/api${imageUrl.url}`}
                alt='로드맵 썸네일 이미지'
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            )}
          </div>
        ) : (
          <Column gap='40px' style={{ position: 'absolute', top: '20%', left: '20%' }}>
            <Column>
              <Text variant='H_B_28'>Horizon</Text>
              <Text variant='T_SB_24' color={color.grayscale['600']}>
                내 로드맵
              </Text>
            </Column>
            <Text variant='T_SB_20' color={color.grayscale['600']}>
              시작하려면 로드맵을 선택하거나, 생성하세요.
            </Text>
            <Column gap='20px'>
              <StyledButton onClick={buttonClickHandler}>
                <Icon
                  name='graph_1'
                  variant='Stroke_L_24'
                  style={{ color: color.primary['500'] }}
                />
                <Text variant='T_SB_16' color={color.primary['500']}>
                  새 로드맵 생성
                </Text>
              </StyledButton>
              <StyledButton onClick={buttonClickHandler}>
                <Icon name='folder' variant='Stroke_L_24' style={{ color: color.primary['500'] }} />
                <Text variant='T_SB_16' color={color.primary['500']}>
                  새 폴더 생성
                </Text>
              </StyledButton>
            </Column>
          </Column>
        )}
      </StyledRoadmaps>
    </AppLayout>
  );
};

export default Roadmaps;

const StyledRoadmaps = styled.div`
    background-color: #FCFCFC;
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledButton = styled.button`
    border: none;
    background: none;
    display: flex;
    gap: 4px;
    align-content: center;
`;
