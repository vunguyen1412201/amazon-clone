import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       
   
        <Route path="/" element={<Header/>}
                        element={<Home/>}
        
        />
        {/* <Route path="/Home" element={<Home/>}/> */}

        
  
        

     </Routes>
    </div>
    
    
    
    </BrowserRouter>
  );
}

export default App;
