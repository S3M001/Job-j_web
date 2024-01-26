import axios from "axios";

const BASE_URL_USER = "http://localhost:8080/api/v1/";

//ローカルストレージ保持のTokenからユーザー認証とユーザー情報の取得を行う
const getUserObject = (token) => {
    return axios.get(BASE_URL_USER + "getUser", { params: token })
}
//パスワードとメールアドレスからユーザー認証を行う
const studentsLogin = (user) => {
    return axios.get(BASE_URL_USER + "login", { params: user })
}


const Object = {
    getUserObject,
    studentsLogin,
}

export default Object;


