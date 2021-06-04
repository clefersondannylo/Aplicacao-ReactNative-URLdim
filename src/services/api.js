import axios from "axios";
//b7f3ac7fadc2071b02e1af157ea0541166365e5f
export const key = "b7f3ac7fadc2071b02e1af157ea0541166365e5f";
const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
}
});

export default api;
