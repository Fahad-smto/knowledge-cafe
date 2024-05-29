import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark } from "react-icons/fa";
 

const Blog = ({blog,handleBookmarks,handleMarksAsread}) => {
     const  {title,cover,author_img,posted_date,author,reading_time,hashtags}=blog ;
    return (
        <div className='mb-10 space-y-4' >
            <img className='w-full m-10' src={cover} alt={`cover picture of the title ${title}`} />

    <div className='flex justify-between '>
            
            <div className='flex ml-10' >
             <img className='w-10 rounded-full h-[50px]' src={author_img} alt="" />
 
            <div className='ml-3'>
                <h3 className=''>{author}</h3>
                <p>{posted_date}</p>
            </div>

            </div>
            <div>
                <span>
                    {reading_time} min read
                    <button onClick={ ()=>handleBookmarks(blog)} className='ml-3 text-red-500 text-2xl '><FaRegBookmark></FaRegBookmark></button>
                </span>
            </div>
  
     </div>

            <h2 className='text-4xl ml-10'>{title}</h2>

            <p className='ml-10'> 
                {
                    hashtags.map((hash,idx)=><span key={idx}  ><a   href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={()=>handleMarksAsread(reading_time)} className='ml-10 text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};


Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleMarksAsread:PropTypes.func
}

export default Blog;

