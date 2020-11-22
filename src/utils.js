import axios from "axios";
import { API_HOST } from './config';

const getProducts = async (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  try {
    const resp = await axios.post(`${API_HOST}/api/search`, data, options);
    return resp.data;
  } catch (err) {
    return { msg: err, discount: false, products: [] }
  }
};

export default getProducts;
