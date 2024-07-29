import './login.css';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { DataContext } from '../context/dataContext';
import { useNavigate } from 'react-router-dom';

const loginSection = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const clearLocalStorage = ()=>{
        handleClose();
        localStorage.clear();
        window.location.reload()
    }
    return (<>
        {
            localStorage.getItem("userId")?
                <>
                    <Box onClick={handleClick} className='absolute right-[20px] flex gap-2'>
                        <img className='w-[40px] h-[40px] rounded-full' src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />
                        <p className='relative top-[7px]'>DhruvSeth18</p>
                    </Box>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={clearLocalStorage}>Logout</MenuItem>
                    </Menu>
                </> :
                <>
                    <button onClick={()=>navigate('/login')} className="btn scale-[0.85] font-semibold" style={{ position: "absolute", right: "25px" }}>Login</button>
                </>
        }
    </>)
}
export default loginSection;