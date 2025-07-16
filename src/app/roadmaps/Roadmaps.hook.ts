import { api } from '@/lib/api.ts';
import { useQuery } from '@tanstack/react-query';

export const useRoadmapImage = (roadmapId?: string) => {
  const { data: imageUrl } = useQuery({
    queryKey: ['roadmap', 'image', roadmapId],
    queryFn: () => api.get(`/roadmap/${roadmapId}/url`),
    enabled: !!roadmapId,
  });

  return {
    imageUrl: imageUrl?.data,
  };
};