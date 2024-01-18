import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';

const BlogRead = () => {
    const {blogId} = useParams()
    const [blog, setBlog] = useState({});

    const fetchBlog = async ()=>{
        const resp = await axios.get("http://localhost:4000/api/v1/"+blogId)
        setBlog(resp.data.data);
    }

    useEffect(()=>{
        fetchBlog();
    }, [])
    console.log(blog.content)


    

    return (
        <div className='blog_read'>
            <div className="blog_title">{blog.title}</div>
            <div className="blog_content">{blog.content}</div>
            <div className="blog_author">Author : {blog.author}</div>
            <div className="foot">
                <Link to={`/blogs/edit/${blog.id}`}>
                    <img className='edit-img' src="../../public/pencil.svg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default BlogRead;