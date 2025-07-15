import { api } from '@/lib/api.ts';
import { useQuery } from '@tanstack/react-query';

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
