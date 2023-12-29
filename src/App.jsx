
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Nosotros from './pages/nosotros';


function App() {
  return (
    <div>
       <Routes>
       <Route path="/Home" element={<Home/>} />
       <Route path="/" element={<Nosotros/>}> </Route>

       </Routes>

    </div>
  )
}

export default App
