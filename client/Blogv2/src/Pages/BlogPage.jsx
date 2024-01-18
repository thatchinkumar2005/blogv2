import React, {useEffect, useState} from "react";
import Blog from "../components/Blog";
import axios from "axios"



const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    async function fetchData(){
        const resp = await axios.get('http://localhost:4000/api/v1/');
        setBlogs(resp.data.data)
    }

    useEffect(()=>{
        fetchData();
    }, [])

    // setBlogs((pv)=>{
    //     const cont = pv.content;
    //     var newCont = ""
    //     const contLst = cont.split(" ");
    //     if(contLst.length > 30){
    //         contLst.forEach(element => {
    //             newCont = newCont + element
                
    //         });
    //         return {...pv, content : newCont}
    //     }else{
    //         return pv;
    //     }
    // })

    
    
    return (
        <div className="blog-page">
            {blogs.map((blog)=>{
                return <Blog key={blog.id} id = {blog.id} title={blog.title} content = {blog.content} author = {blog.author}  />
            })}


         </div>
    );
};




    



export default BlogPage;