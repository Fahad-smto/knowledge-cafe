
import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"
function App() {

   const[bookmarks,setBookmarks]=useState([]);


  const handleBookmarks= blog=>{
    console.log('bookmarks adding soon')
  }
   
  return (
    <>

    <Header></Header>
    
    <div className="md:flex max-w-7xl mx-auto" >
      
       <Blogs handleBookmarks={handleBookmarks}></Blogs>
    
    <Bookmarks></Bookmarks>   
    </div>
  
   
    </>
  )
}

export default App
