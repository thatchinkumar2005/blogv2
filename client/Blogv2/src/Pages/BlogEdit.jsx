import React, { useState, useEffect } from "react";
import BlogInput from "../components/BlogInput.jsx";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Delete from "../components/Delete.jsx";

const BlogEdit = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    const resp = await axios.get("http://localhost:4000/api/v1/" + blogId);
    setBlog(resp.data.data);
  };

  const update = async (blog) => {
    const resp = await axios({
      method: "patch",
      url: "http://localhost:4000/api/v1/" + blogId,
      data: blog,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    console.log(resp.data);
    navigate("/");
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div edit-page>
      <BlogInput withDelete = {true} title={blog.title} content={blog.content} id={blogId} OnClick={update} />
    </div>
  );
};

export default BlogEdit;
