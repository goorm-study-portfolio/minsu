import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import type { SkillCategory } from "@shared/types";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const getSkills = async () => {
  const response = await axiosInstance.get<SkillCategory[]>('/skills');
  return response.data;
};

type GetSkillsOptions = Omit<UseQueryOptions<SkillCategory[], Error, SkillCategory[], readonly ['skills']>, 'queryKey' | 'queryFn'>;

export const useGetSkills = (options?: GetSkillsOptions) => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills(),
    ...options,
  });
};
