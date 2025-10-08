import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import type { AboutMeResponse } from "@shared/types";

export const fetchAboutMe = async () => {
  const response = await axiosInstance<AboutMeResponse[]>('/about');
  return response.data;
};

type GetAboutMeOptions = Omit<UseQueryOptions<AboutMeResponse[], Error, AboutMeResponse[], readonly ['aboutMe']>, 'queryKey' | 'queryFn'>;

export const useGetAboutMe = (options?: GetAboutMeOptions) => {
  return useQuery({
    queryKey: ['aboutMe'],
    queryFn: () => fetchAboutMe(),
    ...options,
  });
};
