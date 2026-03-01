import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchRepositories } from "@/api/github";

export const useRepositories = () => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  return useQuery({
    queryKey: ["repositories", accessToken],
    queryFn: () => fetchRepositories(accessToken!),
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 5,
  });
};
