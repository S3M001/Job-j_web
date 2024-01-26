import React, { useState } from "react";
import TopVarA from "../../components/TopVar/TopVarAdmin";
import '../../css/pages/Admin/admin_Main.css';
import CopyRight from "../../components/parts/CopyRight";
import AdminService from  '../../service/api/adminService';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
// import AdminService from  '../../service/api/adminService';
import Select from "react-select";

// 学年区分の選択
const optionsYear = [
    { value: "J1", label: "J1", }, { value: "J2", label: "J2", }, { value: "S1", label: "S1", },
    { value: "S2", label: "S2", }, { value: "S3", label: "S3", }, { value: "R1", label: "R1", },
    { value: "R2", label: "R2", }, { value: "R3", label: "R3", }, { value: "R4", label: "R4", },
    { value: "G1", label: "G1", }, { value: "G2", label: "G2", }, { value: "G3", label: "G3", },
];
// クラス区分の選択
const optionsClass = [
    { value: "A1", label: "A1", }, { value: "A2", label: "A2", }, 
    { value: "A3", label: "A3", }, { value: "A4", label: "A4", }
];  

// 出席番号区分
const optionsAttendance = [
    { value: "1", label: "1"}, { value: "2", label: "2"}, { value: "3", label: "3"}, { value: "4", label: "4"},
    { value: "5", label: "5"}, { value: "6", label: "6"}, { value: "7", label: "7"}, { value: "8", label: "8"}, 
    { value: "9", label: "9"}, { value: "10", label: "10"}, { value: "11", label: "11"}, { value: "12", label: "12"},
    { value: "13", label: "13"}, { value: "14", label: "14"}, { value: "15", label: "15"}, { value: "16", label: "16"}, 
    { value: "17", label: "17"}, { value: "18", label: "18"}, { value: "19", label: "19"}, { value: "20", label: "20"},
    { value: "21", label: "21"}, { value: "22", label: "22"}, { value: "23", label: "23"}, { value: "24", label: "24"},
    { value: "25", label: "25"}, { value: "26", label: "26"}, { value: "27", label: "27"}, { value: "28", label: "28"},
    { value: "29", label: "29"}, { value: "30", label: "30"}
];

const AdminRegister = () => {
    // const navigate = useNavigate();
    const [user, setUser] = React.useState({
        student_number: "",
        name: "", 
        email: "", 
        password: "", 
        year: "",
        cls: "",
        attendance: ""
    })
    const { student_number, name, email, password } = user

    // 入力
    const userInformationChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }
    
    const EventClassChange = (e, targetName) => {
        setUser({
            ...user, [targetName]: e.label
        })
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        // 選択されたファイルをステートに設定
        setSelectedFile(event.target.files[0]);
    };
    
    const handleUpload = () => {
        // 選択されたファイルをアップロードするための処理をここに追加
        console.log('Uploading file:', selectedFile);
    };
    
    

    // ログイン処理開始
    const user_register = (e) => {
        e.preventDefault();
        // データ送信
        console.log(user)
        AdminService.registerUser(user)
        .then((res) => {
            console.log("Success")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <TopVarA title="ユーザー登録"/>
            <Container maxWidth="xs">
            <Box
                sx={{
                    // marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                <Box 
                    sx={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Box
                        sx={{
                            marginTop: 2,
                        }}
                    >
                            <a href="abc" download="テスト.pdf">一括フォーマットはこちらから</a>
                            <form onSubmit={(e) => handleUpload(e)}>
                                <input type="file" onChange={handleFileChange} required/>
                                <Button type="submit" variant="contained">一括登録</Button>
                            </form>
                    </Box>
                    <form onSubmit={(e) => user_register(e)}>
                        <Grid
                            sx={{ 
                                marginTop: 1,
                            }}
                            container spacing={2}>
                            <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="student_number"
                                    label="学籍番号"
                                    name="student_number"
                                    value={student_number}
                                    autoComplete="student_number"
                                    onChange={(e) => userInformationChange(e)}
                                    />
                                </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                value={name}
                                autoComplete="email"
                                onChange={(e) => userInformationChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="example@example.com"
                                name="email"
                                value={email}
                                autoComplete="email"
                                onChange={(e) => userInformationChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="new-password"
                                onChange={(e) => userInformationChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                required
                                id="alert-dialog-description"
                                options={optionsYear}
                                placeholder="学年"
                                name="year"
                                defaultInputValue={user.year}
                                onChange={(e) => EventClassChange(e, "year")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                required
                                id="alert-dialog-description"
                                options={optionsClass}
                                placeholder="クラス"
                                name="name"
                                defaultValue={user.cls}
                                onChange={(e) => EventClassChange(e, "cls")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                required
                                id="alert-dialog-description"
                                options={optionsAttendance}
                                placeholder="出席番号"
                                name="attendance"
                                defaultInputValue={user.attendance}
                                onChange={(e) => EventClassChange(e, "attendance")}
                                />
                            </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                            登録する
                        </Button>
                    </form>
                </Box>
            </Box>
            <footer>
                <CopyRight />
            </footer>
        </Container>
    </div>
    );
}


export default AdminRegister;
