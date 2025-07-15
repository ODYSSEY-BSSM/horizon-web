import { useBookmark } from '@/app/dashboard/Dashboard.hook';
import styled from '@emotion/styled';
import { Icon, Row, Text, color } from '@odyssey-horizon/ui';
import Link from 'next/link';
import React from 'react';

interface ListRowProps {
  id: string;
  title: string;
  location: string;
  createdAt: string;
  author: string;
  isFavorite: boolean;
}

const ListRow = ({ id, title, location, createdAt, author = '나', isFavorite }: ListRowProps) => {
  const { bookmarked, toggleBookmark } = useBookmark(isFavorite, id);
  return (
    <StyledListRow key={id}>
      <div style={{ justifyContent: 'center' }}>
        <ActionButton onClick={toggleBookmark}>
          <Icon
            name='bookmark'
            variant={bookmarked ? 'Fill_R_24' : 'Stroke_R_24'}
            style={{ color: bookmarked ? color.primary['500'] : color.grayscale['400'] }}
          />
        </ActionButton>
      </div>
      <div>
        <Link href={`/roadmap/${id}`}>
          <Text variant='B_M_14' color={color.black}>
            {title}
          </Text>
        </Link>
      </div>
      <div>
        <Text variant='B_M_12' color={color.grayscale['600']}>
          {location}
        </Text>
      </div>
      <div>
        <Text variant='B_M_12' color={color.grayscale['600']}>
          {createdAt}
        </Text>
      </div>
      <div>
        <Text variant='B_M_12' color={color.grayscale['600']}>
          {author}
        </Text>
      </div>
      <div>
        <ActionButton>
          <Icon name='more_vert' variant='Stroke_R_24' style={{ color: color.grayscale['300'] }} />
        </ActionButton>
      </div>
    </StyledListRow>
  );
};

export default ListRow;

const StyledListRow = styled.div`
    display: grid;
  grid-template-columns: 52px 1fr 184px 186px 186px 50px;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid ${color.grayscale['100']};
    align-items: center;
    div{
        display: flex;
        align-items: center;
    }
`;

const ActionButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;
