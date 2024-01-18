import React,{useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom'
import AddBlog from '../components/AddBlog';
import Blog from "../components/Blog";
import axios from 'axios';


const Home = () => {

    const [blog, setBlogs] = useState([]);

    async function fetchData(){
        const resp = await axios.get('http://localhost:4000/api/v1/');
        setBlogs(resp.data.data[0])
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <div className='home'>
           <h1>BLOGS</h1> 
           <AddBlog/>
           <Blog class="homePageBlogElement" id = {blog.id} title={blog.title} content = {blog.content} author = {blog.author}/>
           
        </div>
    );
};

export default Home;