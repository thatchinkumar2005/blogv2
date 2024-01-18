import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();

    navigate("/create");
  };
  return (
    <button title="Add a new blog" onClick={onClick} className="add-btn">
      <img className="add-img" src="../../public/plus.svg" alt="" />
    </button>
  );
};

export default AddBlog;
