import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewBase = ()=>{
    const [getUserRoll,setUserRoll] = useState('');
    const navigate = useNavigate();
    return (<>
        <div className='mt-[100px] text-center'>
            <p className='text-[50px] font-bold'>  Enter Student Roll</p>
        </div>
        <div className='w-[100%] h-[200px] flex justify-center items-center'>
            <div className='flex gap-7'>
                <TextField onChange={(e)=>setUserRoll(e.target.value)} className='w-[300px]' type='number' id="outlined-basic" label="Enter User Roll" variant="outlined" />
                <Button onClick={(e)=>navigate(`/views/${getUserRoll}`)} className='font-bold' variant="contained">Get User</Button>
            </div>
        </div>

    </>)
}
export default ViewBase;