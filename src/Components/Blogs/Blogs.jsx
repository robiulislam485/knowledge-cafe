import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({bookMarkedHandler,markAsReadHandler}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=><Blog
                blog={blog}
                key={blog.id}
                bookMarkedHandler={bookMarkedHandler}
                markAsReadHandler={markAsReadHandler}
                ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    bookMarkedHandler: PropTypes.func,
    markAsReadHandler: PropTypes.func
}
export default Blogs;