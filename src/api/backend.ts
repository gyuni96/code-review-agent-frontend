import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const syncUser = async (user: {
  githubId: string;
  email?: string;
  username: string;
  avatarUrl?: string;
  accessToken: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, user);
    return response.data;
  } catch (error) {
    console.error("Failed to sync user with backend:", error);
    throw error;
  }
};

export const toggleRepository = async (
  accessToken: string,
  repo: {
    github_repo_id: number;
    full_name: string;
    is_active: boolean;
  },
) => {
  try {
    const response = await axios.post(`${API_URL}/api/repositories/toggle`, repo, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // 백엔드에 누가 요청했는지 알려주기 위해
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to toggle repository:", error);
    throw error;
  }
};
