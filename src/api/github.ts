import axios from "axios";
import { RepositoriesResponseSchema, type Repository } from "@/schemas/repository";

export const fetchRepositories = async (accessToken: string): Promise<Repository[]> => {
  const { data } = await axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      sort: "updated",
      per_page: 50,
    },
  });

  // Zod를 이용한 API 응답 검증
  const validatedData = RepositoriesResponseSchema.parse(data);
  return validatedData;
};
