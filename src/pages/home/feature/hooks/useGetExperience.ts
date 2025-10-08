import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { Experience } from "@shared/types";

export const fetchExperience = async () => {
  const response = await axiosInstance.get<Experience[]>('/experiences');
  return response.data;
};

type GetExperienceOptions = Omit<UseQueryOptions<Experience[], Error, Experience[], readonly ['experiences']>, 'queryKey' | 'queryFn'>;

export const useGetExperience = (options?: GetExperienceOptions) => {
  return useQuery({
    queryKey: ['experiences'],
    queryFn: () => fetchExperience(),
    ...options,
  });
};
