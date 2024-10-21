import PropTypes from 'prop-types';
const Book = ({ book }) => {
    const {title } = book;
    return (
        <div className='bg-white text-lg font-semibold text-gray-700 rounded-md shadow-xl p-8 m-5'>
        <h1>{title}</h1>
        </div>
    );
};



Book.propTypes = {
    book: PropTypes.object
}
export default Book;