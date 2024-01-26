import axios from "axios";

const BASE_URL_USER = "http://localhost:8080/api/v1";

//説明会テーブルの全データ取得
const getBriefingSession = () => {
    return axios.get(BASE_URL_USER + '/briefingSession')
}

//申請情報の登録
const coporateinsert = (appllyInfo) => {
    return axios.get(BASE_URL_USER + '/corporateApplication',{ params: appllyInfo })
}

//申請情報の登録(拒否後の再申請)
const coporateupdate = (appllyInfo) => {
    return axios.get(BASE_URL_USER + '/corporateApplicationup',{ params: appllyInfo })
}

//結果の報告
const reportupdate = (appllyInfo) => {
    return axios.get(BASE_URL_USER + '/updateApplyInfo',{ params: appllyInfo })
}

//お気に入り登録する
const insertbookmark= (card) => {
    return axios.get(BASE_URL_USER + '/insertbookmark',{ params: card })
}

//お気に入りから削除
const deletebookmark= (card) => {
    return axios.get(BASE_URL_USER + '/deletebookmark',{ params: card })
}

//企業情報を全聚徳
const getAllCompany = () => {
    return axios.get(BASE_URL_USER + '/companyInformation')
}

const Object = {
    getBriefingSession,
    coporateinsert,
    reportupdate,
    insertbookmark,
    deletebookmark,
    coporateupdate,
    getAllCompany,
}

export default Object;


