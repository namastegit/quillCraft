import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';

function App() {

  return (
    <div className='italic'>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/bulk" element={<Blogs />} />
          <Route path="/blog" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App