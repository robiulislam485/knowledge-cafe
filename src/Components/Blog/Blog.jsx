import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog, bookMarkedHandler, markAsReadHandler }) => {
    const {cover,author_img, author, posted_date,reading_time, title, hashtags} = blog;
    
    return (
        <div className='space-y-3 border-b-2 my-6'>
            <img className='w-full rounded-md' src={cover} alt='' />
            <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='w-16' src={author_img} alt="" />
                    <div className='ml-4'>
                    <h2 className='text-xl font-bold'>{author}</h2>
                    <p className='text-sm font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>bookMarkedHandler(blog)} className='text-xl'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h1 className='text-2xl font-bold mb-5'>{title}</h1>
            <p>
               {
                hashtags.map((hash,idx)=><span key={idx}><a href=""> #{hash}</a></span>)
               }
            </p>
            <button onClick={()=>markAsReadHandler(reading_time)} className='underline text-blue-600 pb-9'>Mark As Read</button>
        



        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    bookMarkedHandler: PropTypes.func,
    markAsReadHandler: PropTypes.func
}

    

export default Blog;