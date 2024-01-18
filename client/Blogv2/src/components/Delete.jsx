import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Delete = (props) => {
    const navigate = useNavigate()

    const deleteBlog = async (e) =>{
        e.preventDefault();

        const resp = await axios({
            method : "delete",
            url : "http://localhost:4000/api/v1/" + props.id,
        })

        navigate("/");
        


    }





    return (
       <button onClick={deleteBlog} className='delete'>
            delete
       </button>
    );
};

export default Delete;