import PropTypes from 'prop-types'; 
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

 


const Blogs = ({handleBookmarks ,handleMarksAsread}) => {

const  [blogs,setBlogs] =useState([])


useEffect (()=>{
    fetch('blogs.json')
    .then(res =>res.json())
    .then(data =>setBlogs(data))
},[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl ml-10">blogs {blogs.length}</h1>
 
        {
            blogs.map (blog =><Blog key={blogs.id}
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarksAsread={handleMarksAsread}
            >
            
            </Blog>)
        }




        </div>

    );
};

Blogs.propTypes={
    handleBookmarks:PropTypes.func,
    handleMarksAsread:PropTypes.func
}

export default Blogs;