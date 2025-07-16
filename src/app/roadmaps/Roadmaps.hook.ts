import { api } from '@/lib/api.ts';
import { useQuery } from '@tanstack/react-query';

export const useRoadmapsData = (roadmapId?: string) => {
  const { data: imageData } = useQuery({
    queryKey: ['roadmap', 'image', roadmapId],
    queryFn: () => api.get(`/roadmap/${roadmapId}/url`),
    enabled: !!roadmapId,
  });

  const { data: rootContentsData } = useQuery({
    queryKey: ['directories', 'root-contents'],
    queryFn: () => api.get('/directories/root-contents'),
  });

  return {
    imageUrl: imageData?.data,
    rootContents: rootContentsData?.data,
  };
};
