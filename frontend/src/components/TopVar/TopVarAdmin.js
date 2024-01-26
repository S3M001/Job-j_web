import React from 'react';
import '../../css/TopVar/TopVarAdmin.css';
// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/Home';
// import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useAuth as adminUseAuth } from '../../service/store/adminAuth';
import ApartmentIcon from '@mui/icons-material/Apartment';


const TopVarAdmin = (props) => {
    const [state, setState] = React.useState({
        right: false,
    });
    const anchor = "left";
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    console.log(window.location.pathname)


    const menuList= [
        {
            text: 'ユーザー',
            link: '/admin/userList',
            icon: PersonIcon,

        },
        {
            text: '企業',
            link: '/admin/editCompany',
            icon: ApartmentIcon,
        },
        {
            text: '説明会',
            link: '/admin/companyList',
            icon: FormatListBulletedIcon,
        },
        {
            text: '申請情報',
            link: '/admin/applyList',
            icon: LocalPostOfficeIcon,
        }
    ];

    const list = () => (
        <Box className="AdminHamburgerBox">
            <Link href='/'><p className="TopVarAdmin-Hanburger-Job√j">Job√j</p></Link>
            <Link to="/admin/userList" className='AdminHambugerButton'>
                <ListItemButton>
                    <ListItemIcon><PersonIcon fontSize="medium" /></ListItemIcon>
                    <ListItemText className='AdminHambugerText'>ユーザー</ListItemText>
                </ListItemButton>
            </Link>
            <Link to="/admin/editCompany" className='AdminHambugerButton'><ListItemButton>
                <ListItemIcon><ApartmentIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='AdminHambugerText'>企業一覧</ListItemText>
            </ListItemButton></Link>
            <Link to="/admin/companyList" className='AdminHambugerButton'><ListItemButton>
                <ListItemIcon><FormatListBulletedIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='AdminHambugerText'>説明会一覧</ListItemText>
            </ListItemButton></Link>

            <Link to="/admin/applyList" className='AdminHambugerButton'><ListItemButton>
                <ListItemIcon><LocalPostOfficeIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='AdminHambugerText'>申請一覧</ListItemText>
            </ListItemButton></Link>

            {/* <Link to="/admin/home" className='AdminHambugerButton'><ListItemButton>
                <ListItemIcon><HomeIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='AdminHambugerText'>ホーム</ListItemText>
            </ListItemButton></Link> */}
        </Box>
    );
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const adminAuth = adminUseAuth()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        adminAuth.logout()
    }
    return (
        <div>
            <header className="TopVarAdmin-header">
                <div className="AdminHamburger">
                    <Box>
                        <IconButton onClick={toggleDrawer(anchor, true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </Box>
                </div>
                <div className="TopVarAdmin-TitleFlex">
                    <Link to='/admin/applyList'><p className="TopVarAdmin-Job√j">Job√j</p></Link>
                    <p className="TopVarAdmin-Title">{props.title}</p>
                </div>
                <nav className="TopVarAdmin-nav">
                    <ul>
                        {menuList.map((item) =>(
                            <li className="TopVarAdmin-border" >
                                <Link to={item.link}>
                                <item.icon fontSize="medium" />
                                {item.text}
                                {item.link === window.location.pathname ? <div className="underline"></div> : ""}
                                </Link>
                            </li>
                        ))
                        }   
                        {/* <li className="TopVarAdminDelete"><Link to="/admin/userList">
                            <PersonIcon fontSize="medium" />
                            ユーザー
                        </Link></li>
                        <li className="TopVarAdminDelete"><Link to="/admin/editCompany">
                            <ApartmentIcon fontSize="medium" />
                            企業一覧
                        </Link></li>
                        <li className="TopVarAdminDelete"><Link to="/admin/companyList">
                            <FormatListBulletedIcon fontSize="medium" />
                            説明会一覧
                        </Link></li>
                        <li className="TopVarAdminDelete"><Link to="/admin/applyList">
                            <LocalPostOfficeIcon fontSize="medium" />
                            申請一覧
                        </Link></li> */}
                        {/* <li className="TopVarAdminDelete"><Link to="/admin/home">
                            <HomeIcon fontSize="medium" />
                            ホーム
                        </Link></li> */}
                        <li>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <SettingsIcon fontSize="medium" />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
                                <Link to='/admin/register'>
                                    <MenuItem onClick={handleClose}>ユーザー登録</MenuItem>
                                </Link>
                            </Menu>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
export default TopVarAdmin;