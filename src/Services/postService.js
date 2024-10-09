import api from "./api";

export async function getAll() {
  try {
    const response = await api.get("/posts?populate[Upload][fields][0]=url");
    console.log("Resposta da API:", response.data);

    const formattedPosts = response.data.data.map((post) => ({
      id: post.id,
      Titulo: post.Titulo,
      Descricao: post.Descricao,
      imageUrl:
        post.Link ||
        (post.Upload && post.Upload[0]?.url
          ? `http://localhost:1337${post.Upload[0].url}`
          : null),
    }));

    console.log("Posts formatados:", formattedPosts);

    return formattedPosts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}
