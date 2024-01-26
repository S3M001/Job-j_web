import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth } from '../service/store/auth';
import { useAuth as adminUseAuth } from '../service/store/adminAuth';
import "../css/navvar.css"

const NavVar = () => {
    const auth = useAuth()
    const adminAuth = adminUseAuth()
    return (
        <nav className='primary-nav'>
            <div>
                <strong>
                    [User
                    {
                        !auth.user && (
                            <>
                                未ログイン
                            </>
                        )
                    }{auth.user && (
                        <>
                            ≪{auth.user.email}≫：ログイン中
                        </>
                    )
                    }
                    ]
                </strong>
                <NavLink to='/companySerch' >
                    企業申請 |
                </NavLink>
                <NavLink to='/calender' >
                    カレンダー |
                </NavLink>
                <NavLink to='/Home'>
                    ダッシュボード |
                </NavLink>
                <NavLink to='/'>
                    <font color="blue">
                        ログイン画面
                    </font>
                </NavLink>
            </div>
            <div>
                <strong>
                    [Admin
                    {
                        !adminAuth.admin && (
                            <>
                                ：未ログイン
                            </>
                        )
                    }{adminAuth.admin && (
                        <>
                            ≪{adminAuth.admin.email}≫：ログイン中
                        </>
                    )
                    }
                    ]
                </strong>
                <NavLink to='/admin/editCompany' >
                    企業一覧 |
                </NavLink>
                <NavLink to='/admin/companyList' >
                    説明会一覧 |
                </NavLink>
                <NavLink to='/admin/applyList' >
                    申請一覧 |
                </NavLink>
                {/* <NavLink to='/admin/home'>
                    ホーム |
                </NavLink> */}
                <NavLink to='/admin/login'>
                    <font color="green">
                        管理者ログイン
                    </font>
                </NavLink>
            </div>
        </nav>
    )
}
export default NavVar;