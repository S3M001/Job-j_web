import React from 'react';
import '../../css/TopVar/TopVarUser.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
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
import { useAuth } from '../../service/store/auth';

const TopVarUser = (props) => {
    const [state, setState] = React.useState({
        right: false,
    });
    const auth = useAuth();
    const anchor = "left";

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box className="hamburgerBox">
            <Link to='/home'><p className="TopVarUser-Hanburger-Job√j">Job√j</p></Link>
            <Link to="/companySerch" className='hambugerButton'><ListItemButton>
                <ListItemIcon><SearchIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='hambugerText'>企業申請</ListItemText>
            </ListItemButton></Link>

            <Link to="/calender" className='hambugerButton'><ListItemButton>
                <ListItemIcon><EventIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='hambugerText'> カレンダー</ListItemText>
            </ListItemButton></Link>

            <Link to="/home" className='hambugerButton'><ListItemButton>
                <ListItemIcon><HomeIcon fontSize="medium" /></ListItemIcon>
                <ListItemText className='hambugerText'>ホーム</ListItemText>
            </ListItemButton></Link>
        </Box>
    );

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        auth.logout()
    }

    return (
        <div>
            <header className="TopVarUser-header" >
                <div className="hamburger">
                    <Box>
                        <IconButton onClick={toggleDrawer(anchor, true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </Box>
                </div>
                <div className="TopVarUser-TitleFlex">
                    <Link to='/home'><p className="TopVarUser-Job√j">Job√j</p></Link>
                    <p className="TopVarUser-AppNamer-Title">{auth.user.name + "の" + props.title + "画面"} </p>
                </div>
                <nav className="TopVarUser-nav">
                    <div className={'TopVarUser-border' + props.title}></div>
                    <ul>
                        <li className="TopVarUserDelete"><Link to="/companySerch">
                            <SearchIcon fontSize="medium" />
                            企業申請
                        </Link></li>
                        <li className="TopVarUserDelete"><Link to="/calender">
                            <EventIcon fontSize="medium" />
                            カレンダー
                        </Link></li>
                        <li className="TopVarUserDelete"><Link to="/home">
                            <HomeIcon fontSize="medium" />
                            ホーム
                        </Link></li>
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
                            </Menu>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
export default TopVarUser;