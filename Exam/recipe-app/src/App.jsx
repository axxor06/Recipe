
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
             <Route path="/add" element={<AddRecipe />} />
            </Routes>

         <Footer />
               <ToastContainer position="top-right" autoClose={1000} />
        </BrowserRouter>
    )
}

export { toast }
export default App
