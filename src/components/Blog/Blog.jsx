import PropTypes from 'prop-types'; // ES6
 

const Blog = ({blog}) => {
     const  {title,cover,author_img,posted_date,author,reading_time,hashtags}=blog ;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />

    <div className='flex justify-between'>
            
            <div className='flex ' >
             <img className='w-10 rounded-full h-[50px]' src={author_img} alt="" />
 
            <div className='ml-3'>
                <h3 className=''>{author}</h3>
                <p>{posted_date}</p>
            </div>

            </div>
            <div>
                <span>
                    {reading_time}
                </span>
            </div>
  
     </div>

            <h2 className='text-4xl'>{title}</h2>

            <p> 
                {
                    hashtags.map((hash,idx)=><span key={idx}  ><a   href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;

