import React from "react";
import BlogInput from "../components/BlogInput.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreatePage = () => {

    const navigate = useNavigate();

    const create = async (blog) => {
        const resp = await axios({
          method: "post",
          url: "http://localhost:4000/api/v1/",
          data: blog,
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        });
    
        console.log(resp.data);
        navigate("/");
      };
  return (

    
    <div>
      <BlogInput withDelete={false} title="" content="" OnClick={create} />
    </div>
  );
};

export default CreatePage;
