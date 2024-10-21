import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [spentTime, setSpentTime] = useState(0);
  const bookMarkedHandler = (blog) => {
    const newBookMarks = [...bookMarked, blog];
    setBookMarked(newBookMarks);
  }
  const markAsReadHandler = time => {
    const newSpentTime = spentTime + time;
    setSpentTime(newSpentTime);

  }
  return (
    <>
      <Header></Header>
      <div className='md:flex  mt-4 max-w-7xl mx-auto'>
        <Blogs bookMarkedHandler={bookMarkedHandler}
          markAsReadHandler={markAsReadHandler}></Blogs>
        <Bookmark bookMarked={bookMarked}
                  spentTime={spentTime}></Bookmark>
      </div>
    </>
  )
}

export default App
