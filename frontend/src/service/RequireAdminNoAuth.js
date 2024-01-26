import { useAuth as adminUseAuth } from "./store/adminAuth";
import AdminService from "../service/api/adminService"
import { Navigate, useLocation } from 'react-router-dom'
import cryptoObject from "./bcrypt";

export const RequireAdminNoAuth = ({ children }) => {
  let token = localStorage.getItem('admin');
  const auth = adminUseAuth()
  const location = useLocation()

  if (token) {
    token = cryptoObject.decode(token).toString()
    //使う文字のみ取り出す
    const result = token.match(/.{1,2}/g);
    token = ""
    result.forEach(num => {
      token += num.charAt(num.length - 1)
    });
    AdminService.getAdminObject({ adminId: token })
      .then((admin) => {
        if (admin.data !== "") {
          AdminService.getTeacherClass({id:admin.data.number})
          .then((res)=> {
            admin.data.class = res.data
          })
          .catch((err) => {
              console.error(err)
          })
          auth.login(admin.data);
        }
      })
      .catch((error) => {
        console.log("ユーザーが存在しません。")
      })
    if (auth.admin) {
      return <Navigate to='/admin/applyList' state={{ path: location.pathname }} />
    }
  }
  return children
}
