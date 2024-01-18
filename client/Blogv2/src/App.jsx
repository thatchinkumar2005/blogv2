import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import BlogRead from "./Pages/BlogRead";
import BlogEdit from "./Pages/BlogEdit";
import CreatePage from "./Pages/CreatePage";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:blogId" element={<BlogRead />} />
            <Route path="/blogs/edit/:blogId" element={<BlogEdit />} />
            <Route path="/create" element = {<CreatePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
