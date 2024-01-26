import React from "react";
import '../css/Router.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/User/Home";
import CompanySerchPage from "../pages/User/CompanySerch";
import CalenderPage from "../pages/User/CalendarUser";
import AdminApplyList from "../pages/Admin/AdminApplyList";
import AdminCompanyList from "../pages/Admin/AdminCompanyList";
import AdminRegister from "../pages/Admin/AdminRegister";
import  AdminEditCompany  from "../pages/Admin/AdminEditCompany";
import { AuthProvider } from "../service/store/auth";
import { AdminAuthProvider } from "../service/store/adminAuth";
import NavVar from "../components/navvar";
import { RequireAuth } from "../service/RequireAuth"
import { RequireNoAuth } from "../service/RequireNoAuth";
import { RequireAdminAuth } from "../service/RequireAdminAuth";
import { RequireAdminNoAuth } from "../service/RequireAdminNoAuth";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminUserList from "../pages/Admin/AdminUserList";
import { NarrowdownProvider} from "../service/store/narrowdown";

const RouterPage = () => {

    return (
        <AuthProvider>
            <AdminAuthProvider>
                <NarrowdownProvider>
                <Router>
                    <div>
                        <NavVar />
                        <Routes>
                            {/* User */}
                            <Route path="/" element={<RequireNoAuth><Login /></RequireNoAuth>} />
                            <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
                            <Route path="/companySerch" element={<RequireAuth><CompanySerchPage /></RequireAuth>} />
                            <Route path="/calender" element={<RequireAuth><CalenderPage /></RequireAuth>} />
                            <Route path="*" element={<NotFound />} />
                            {/* Admin */}
                            <Route path="/admin/login" element={<RequireAdminNoAuth><AdminLogin /></RequireAdminNoAuth>} />
                            <Route path="/admin/applyList" element={<RequireAdminAuth><AdminApplyList /></RequireAdminAuth>} />
                            <Route path="/admin/companyList" element={<RequireAdminAuth><AdminCompanyList /></RequireAdminAuth>} />
                            <Route path="/admin/register" element={<RequireAdminAuth><AdminRegister /></RequireAdminAuth>} />
                            <Route path="/admin/editCompany" element={<RequireAdminAuth><AdminEditCompany/></RequireAdminAuth>} />
                            <Route path="/admin/userList" element={<RequireAdminAuth><AdminUserList/></RequireAdminAuth>} />
                        </Routes>
                    </div>
                </Router>
                </NarrowdownProvider>
            </AdminAuthProvider>
        </AuthProvider>
    );
};
export default RouterPage;