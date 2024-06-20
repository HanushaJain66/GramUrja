import React,{ useContext, useState} from 'react';
import {AppBar,Toolbar,styled,Box,Drawer} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import LoginSection from '../loginSection/loginsection';
import { DataContext } from '../context/dataContext';

const drawerWidth = 240;


const EditToolbar = styled(Toolbar)`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const {account} = useContext(DataContext);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ width:'100%'}} >
                    <EditToolbar className='bg-[#660000]' position='fixed' sx={{height:{xs:'75px'}}}>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } ,position:'absolute',left:'5vh',scale:'1.4'}} >
                            <MenuIcon />
                        </IconButton>
                        <div className='w-[44%] hidden sm:flex justify-around'>
                            <NavLink style={{fontSize:"20px",textDecoration:'none',color:"white"}} to={'/'}>Home</NavLink>
                            <NavLink style={{fontSize:"20px",textDecoration:'none',color:"white"}} to={'/about'}>About</NavLink>
                            <NavLink style={{fontSize:"20px",textDecoration:'none',color:"white"}} to={'/contact'}>Contact</NavLink>
                            {(localStorage.getItem("userId") || account )&& <NavLink style={{fontSize:"20px",textDecoration:'none',color:"white"}} to={'/student'}>GramHunar</NavLink>}
                            {(localStorage.getItem("userId") || account )&& <NavLink style={{fontSize:"20px",textDecoration:'none',color:"white"}} to={'/goat'}>GoatMitra</NavLink>}
                        </div>
                    <LoginSection/>
                    </EditToolbar>
                </AppBar>
                <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}} aria-label="mailbox folders">
                    <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose}
                        ModalProps={{keepMounted: true}}
                        sx={{display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor: 'black'},}}>
                    </Drawer>
                </Box>
            </Box>
        </>
    );
}
export default Navbar;