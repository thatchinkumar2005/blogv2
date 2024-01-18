import React, { useState, useEffect } from "react";
import BlogInput from "../components/BlogInput.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import Delete from "./Delete.jsx";

const editBlogInput = (props) => {
  const [blog, setBlog] = useState({});

  const fetchBlog = ()=>{
    setBlog({
      content : props.content,
      title : props.title,
      author : "thatchin"
    });
  }
  
  useEffect(()=>{
    fetchBlog();
  },[props]);


  const onInput = (e) => {
    setBlog((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    props.OnClick(blog);

  }
  // console.log(blog)
  return (
    <div className="edit-input">
      <textarea className="edit edit-title" onChange={onInput} name="title" type="text" value={blog.title} rows="1" cols="30" />
      <textarea
        className="edit edit-content"
        onChange={onInput}
        name="content"
        cols="30"
        rows="10"
        value={blog.content}
      ></textarea>
      <button className="edit edit-submit" onClick={onSubmit}>Submit</button>
      {props.withDelete&&<Delete id={props.id}/>}
    </div>
  );
};

export default editBlogInput;
