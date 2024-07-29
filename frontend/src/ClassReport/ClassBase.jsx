import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GraphBase = ()=>{
    const [getUserClass,setUserClass] = useState('');
    const navigate = useNavigate();
    return (<>
        <div className='mt-[100px] text-center'>
            <p className='text-[50px] font-bold'>  Enter Class</p>
        </div>
        <div className='w-[100%] h-[200px] flex justify-center items-center'>
            <div className='flex gap-7'>
                <TextField onChange={(e)=>setUserClass(e.target.value)} className='w-[300px]' type='number' id="outlined-basic" label="Enter class number" variant="outlined" />
                <Button onClick={(e)=>navigate(`/classhistory/${getUserClass}`)} className='font-bold' variant="contained">Get Class</Button>
            </div>
        </div>

    </>)
}
export default GraphBase;