
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
};

function Bookmarks( {bookmarks}) {
    return (
        <div className="md:w-1/3 bg-slate-300 ml-20">
           <h2 className='text-center text-3xl'> bookmarks:{bookmarks.length}</h2>
           {
            bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
}

export default Bookmarks;