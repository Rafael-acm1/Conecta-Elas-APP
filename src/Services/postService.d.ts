// postService.d.ts
export function getAll(): Promise<
  { id: number; Titulo: string; Descricao: string; imageUrl: string | null }[]
>;
