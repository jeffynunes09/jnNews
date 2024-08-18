import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://jnnews.onrender.com";

export async function getAllPosts() {
  const response = await axios.get(`${baseURL}/posts`);
  return response;
}

export async function getTopPost() {
  const response = await axios.get(`${baseURL}/posts/top`);
  return response;
}

export async function searchPosts(title) {
  const response = await axios.get(`${baseURL}/posts/search?title=${title}`);
  return response;
}

export async function getAllPostsByUser() {
  const response = await axios.get(`${baseURL}/posts/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function createNews(body) {
  const response = await axios.post(`${baseURL}/posts/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function getNewsById(id) {
  const response = await axios.get(`${baseURL}/posts/byIdPost/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function editNews(body, id) {
  const response = await axios.patch(`${baseURL}/posts/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function deleteNews(id) {
  const response = await axios.delete(`${baseURL}/posts/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
