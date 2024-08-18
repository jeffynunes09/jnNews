import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://jnnews.onrender.com";

export  async function signup(data) {
  delete data.confirmPassword;
  const body = await {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/XbRg9D7.png",
  };
  const response = await axios.post(`${baseURL}/user/create`, body);
  return response;
}

export   async function signin(data) {
  const response = await axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export   async function userLogged() {
  const response =await axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}

async function   generateUserName(name) {
  const nameLowerCaseWithoutSpaces = await name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}
