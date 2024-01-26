import axios from "axios";

const BASE_URL_USER = "http://localhost:8080/api/v1/admin";

//ローカルストレージ保持中のTokenからアドミン認証を行う
const getAdminObject = (token) => {
    return axios.get(BASE_URL_USER + "/getAdmin", { params: token })
}
//アドミンのログイン認証を行う
const adminLogin = (admin) => {
    return axios.get(BASE_URL_USER + "/login", { params: admin })
}

const registerCompany = (company) => {
    return axios.get(BASE_URL_USER + "/save/company", { params: company})
}
const updateCompany = (company) => {
    return axios.get(BASE_URL_USER + "/update/company", { params: company})
}
const registerEvent = (event) => {
    return axios.get(BASE_URL_USER + "/save/event", { params: event})
}

//説明会情報の編集内容を登録する
const updateEvent = (event) => {
    return axios.get(BASE_URL_USER + "/save/eventAll", { params: event})
} 

//説明会情報を削除する
const deleteEvent = (id) => {
    return axios.get(BASE_URL_USER + "/delete/event", { params: id})
} 

//教師の担当クラスデータを取得する
const getTeacherClass = (id) => {
    return axios.get(BASE_URL_USER + "/teacherClass", { params: id})
} 

// ユーザー一人だけ登録
const registerUser = (user) => {
    return axios.get(BASE_URL_USER + '/user/register',{ params: user })
}

const Object = {
    getAdminObject,
    adminLogin,
    registerCompany,
    registerEvent,
    updateEvent,
    deleteEvent,
    getTeacherClass,
    registerUser,
    updateCompany,
}

export default Object;


