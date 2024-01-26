/* App.js */
import React, { useState } from "react";
import CopyRight from "../../components/parts/CopyRight";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import UserService from "../../service/api/userService"
import { useAuth } from "../../service/store/auth";
import { useLocation } from "react-router-dom";
import cryptoObject from "../../service/bcrypt";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" })
    const { email, password } = user
    const auth = useAuth()
    const location = useLocation()
    const redirectionPath = location.state?.path || '/home'

    // 入力
    const userInformationChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }

    // ログイン処理開始
    const submitLogin = (e) => {
        e.preventDefault();
        UserService.studentsLogin(user)
            .then(response => {
                if (response.data) {
                    //ユーザ情報を格納する
                    auth.login(response.data)
                    //ユーザーの学籍番号を暗号化してローカルストレージに保存する
                    let token = cryptoObject.encode(response.data.attendance_number.trim())
                    localStorage.setItem('token', token)
                    // console.log(response.data)
                    navigate(redirectionPath, { replace: true })
                } else {
                    alert("メールアドレスかパスワードが間違っています。")
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    ログイン
                </Typography>

                <form onSubmit={(e) => submitLogin(e)}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => userInformationChange(e)}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => userInformationChange(e)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        ログイン
                    </Button>
                </form>
            </Box>
            <footer>
                <CopyRight />
            </footer>
        </Container>
    );
};

export default Login;