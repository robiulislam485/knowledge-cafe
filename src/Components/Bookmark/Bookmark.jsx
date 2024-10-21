import PropTypes from 'prop-types';
import Book from '../Book/Book';
const Bookmark = ({bookMarked,spentTime}) => {
    return (
        <div className='md:w-1/3 mt-5'>
            <h2 className='ml-4 mb-4 text-center bg-[#6047EC1A] text-lg font-bold text-[#6047EC] border border-[#6047EC] p-5 rounded-md shadow-md'>Spent Time on read: {spentTime} min</h2>
        <div className=" bg-[#1111110D] p-5 rounded-md ml-4 h-1/2">
            <h1 className='text-2xl font-bold ml-4'>Bookmarked Blogs : {bookMarked.length}</h1>
           {
            bookMarked.map((book,idx)=><Book key={idx} book={book}></Book>)
           }
        </div>
        </div>
    );
};




Bookmark.propTypes = {
    bookMarked: PropTypes.array,
    spentTime: PropTypes.number
}
export default Bookmark;