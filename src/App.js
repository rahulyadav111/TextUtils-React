// import logo from './logo.svg';
import react,{ useState } from 'react';
import './App.css';
// let name="Rahul yadav.."
import './Components/Navbar1';
import Navbar from './Components/Navbar1';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // routing in react 


function App() {
  const [mode,setMode]=useState('dark'); // whether dark mode 
  // const [mode, setMode] = useState('dark')
return (

   <>
  
 <Navbar  title="TextTiles"   />
 <Alert/>
 
 <div className="container my-3">
 
  
{/*   
  <Router>
    <Routes>
        <Route  path="/" element={<TextForm />} />
          <Route path="/About" element={<About/>} />
   
   
    </Routes>
  </Router> */}
  <TextForm/>

 </div>


 


    </>
  );
 
}

export default App;
