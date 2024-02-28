import axios from "axios";

export async function getDetailProductById(productId) {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
