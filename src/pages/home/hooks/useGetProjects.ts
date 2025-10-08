import type { Project } from "@shared/types";
import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const fetchProjects = async () => {
  const response = await axiosInstance.get<Project[]>('/projects');
  return response.data;
};

type GetProjectsOptions = Omit<UseQueryOptions<Project[], Error, Project[], readonly ['projects']>, 'queryKey' | 'queryFn'>;

export const useGetProjects = (options: GetProjectsOptions) => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchProjects(),
    ...options,
  });
};
