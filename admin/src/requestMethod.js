import axios from "axios";
import { useSelector } from "react-redux";

const base_url = "http://localhost:5000/api/";
const currentUser = localStorage.getItem("persist:root") &&  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
const Token =  localStorage.getItem("persist:root") && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken;


export const publicRequest = axios.create({
   baseURL:base_url
});

export const userRequest = axios.create({
    baseURL:base_url,
    headers:{ token: `Bearer ${Token}` },
});