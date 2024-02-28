import axios from "axios";

export async function getProductsByCategory(categoryId) {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
