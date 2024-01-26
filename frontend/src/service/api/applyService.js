import axios from "axios";

const BASE_URL_USER = "http://localhost:8080/api/v1/";

//ユーザー単位の企業申請情報を取得する
const getUserApplyInfomation = (user) => {
    return axios.get(BASE_URL_USER + "applicationInformation", { params: user })
}
//すべての申請情報を取得する
const getApplyInfomation = () => {
    return axios.get(BASE_URL_USER + "applicationInformation")
}

//変更された申請情報を更新する
const updateApplyInfo = (appllyInfo) => {
    return axios.get(BASE_URL_USER + 'updateApplyInfo/confirmation',{ params: appllyInfo })
}

//コメントを更新する
const updateComments = (comments) => {
    return axios.get(BASE_URL_USER + 'updateComment',{ params: comments })
}

//メモを更新する
const updateMemo = (memo) => {
    return axios.get(BASE_URL_USER + 'updateMemo',{ params: memo })
}

//承認
const applicationApproval = (approval) => {
    return axios.get(BASE_URL_USER + 'application/approval',{ params: approval })
}

//担当確認
const updateApplyInfoConfirmation = (confirmation) => {
    return axios.get(BASE_URL_USER + 'updateApplyInfo/confirmation',{ params: confirmation })
}


const Object = {
    getUserApplyInfomation,
    getApplyInfomation,
    updateApplyInfo,
    updateComments,
    applicationApproval,
    updateApplyInfoConfirmation,
    updateMemo,
}

export default Object;


