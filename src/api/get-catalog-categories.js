import axios from "axios";

export async function getCatalogCategories() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
