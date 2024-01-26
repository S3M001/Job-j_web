import { useAuth } from "./store/auth";
import UserService from "../service/api/userService"
import { Navigate, useLocation } from 'react-router-dom'
import cryptoObject from "./bcrypt";

export const RequireNoAuth = ({ children }) => {
  let token = localStorage.getItem('token');
  const auth = useAuth()
  const location = useLocation()

  if (token) {
    token = (cryptoObject.decode(token)).toString();
    //使う文字のみ取り出す
    const result = token.match(/.{1,2}/g);
    token = ""
    result.forEach(num => {
      token += num.charAt(num.length - 1)
    });
    //トークンから認証
    UserService.getUserObject({ userId: token })
      .then((user) => {
        if (user.data !== "") {
          auth.login(user.data);
        }
      })
      .catch((error) => {
        console.log("↑上のエラーは空のトークンが設定されているため起きるエラーです。または、該当ユーザーが存在してないために発生してます。")
      })
    if (auth.user) {
      return <Navigate to='/home' state={{ path: location.pathname }} />
    }
  }
  return children
}
