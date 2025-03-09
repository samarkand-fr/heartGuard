export const deleteArticle = async (id: string) => {
    const response = await fetch(`/api/articles/${id}/delete`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  };
  