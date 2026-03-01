import { z } from "zod";

export const RepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  isActive: z.boolean().default(false), // 이 필드는 백엔드 로직이 필요하지만 우선 false로 기본값 설정
});

export const RepositoriesResponseSchema = z.array(RepositorySchema);

export type Repository = z.infer<typeof RepositorySchema>;
