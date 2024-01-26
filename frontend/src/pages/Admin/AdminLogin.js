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
import AdminService from "../../service/api/adminService"
import { useAuth as adminUseAuth } from "../../service/store/adminAuth";
import { useLocation } from "react-router-dom";
import cryptoObject from "../../service/bcrypt";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({ email: "", password: "" })
    const { email, password } = admin
    const adminAuth = adminUseAuth()
    const location = useLocation()
    const redirectionPath = location.state?.path || '/admin/applyList'

    // 入力
    const userInformationChange = (e) => {
        setAdmin({
            ...admin, [e.target.name]: e.target.value
        });
    }

    
    // ログイン処理開始
    const submitLogin = (e) => {
        e.preventDefault();
        AdminService.adminLogin(admin)
        .then(response => {
            if (response.data) {
                    AdminService.getTeacherClass({id: response.data.number})
                    .then((res)=> {
                        response.data.class = res.data
                    })
                    .catch((err) => {
                        console.error(err)
                    })
                    adminAuth.login(response.data)
                    let token = cryptoObject.encode(response.data.number.toString())
                    localStorage.setItem('admin', token)
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
                    管理者ログイン
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
                        variant="contained" color="success"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        ログイン
                    </Button>
                </form>
            </Box>
            <footer>
                <CopyRight />
            </footer>
        </Container >
    );
};

export default AdminLogin;