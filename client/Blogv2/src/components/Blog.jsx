import React from 'react';
import {Link} from "react-router-dom"

const Blog = (props) => {
    return (
        <div className={`${props.class} blog`}>
            <div className="title">
                <Link to={`/blogs/${props.id}`}>{props.title}</Link>
            </div>
            <div className="content">{props.content}</div>
            <div className="author">Author : {props.author}</div>
        </div>
    );
};

export default Blog;