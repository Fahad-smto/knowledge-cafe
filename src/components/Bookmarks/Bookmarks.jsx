
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
};

function Bookmarks( {bookmarks,readingTime}) {
    return (
        
        <div className="md:w-1/3 bg-slate-300 ml-20">
            <div className='ml-10 lg:ml-28 text-xl'>Reading time :<span className='text-red-700'>{readingTime}</span> </div>
           <h2 className='text-center text-3xl'> bookmarks:{bookmarks.length}</h2>
           {
            bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
}

export default Bookmarks;