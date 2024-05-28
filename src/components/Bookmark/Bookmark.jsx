import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='ml-5 mt-5 bg-slate-400 p-6 rounded-lg mr-5'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;