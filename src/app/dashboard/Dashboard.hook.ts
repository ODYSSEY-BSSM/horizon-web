import { api } from '@/lib/api.ts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

export const useDashboardData = () => {
  const { data: lastActivity } = useQuery({
    queryKey: ['dashboard', 'lastActivity'],
    queryFn: () => api.get('/roadmap/last-accessed'),
  });

  const { data: roadmapCount } = useQuery({
    queryKey: ['dashboard', 'roadmapCount'],
    queryFn: () => api.get('/roadmap/count'),
  });

  const { data: roadmapList } = useQuery({
    queryKey: ['dashboard', 'roadmapList'],
    queryFn: () => api.get('/roadmap/all'),
  });

  return {
    lastActivity: lastActivity?.data,
    roadmapCount: roadmapCount?.data,
    roadmapList: roadmapList?.data,
  };
};

export const useBookmark = (initialBookmarked: boolean, roadmapId: string) => {
  const [bookmarked, setBookmarked] = React.useState(initialBookmarked);
  const queryClient = useQueryClient();

  const bookmarkMutation = useMutation({
    mutationFn: () => api.post(`/roadmap/favorite/${roadmapId}`),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['dashboard', 'roadmapList'] });
    },
    onError: error => {
      console.error('북마크 토글 실패:', error);
      setBookmarked(prev => !prev);
    },
  });

  const toggleBookmark = () => {
    setBookmarked(prev => !prev);
    bookmarkMutation.mutate();
  };

  return {
    bookmarked,
    toggleBookmark,
  };
};
