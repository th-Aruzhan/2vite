import axios from "axios";

export async function getHomeCategories() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}