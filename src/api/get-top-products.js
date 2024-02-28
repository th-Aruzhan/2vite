import axios from "axios";

export async function getTopProducts() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

