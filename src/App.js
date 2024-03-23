import Login from "./component/Login";
import About from "./component/About";
import Sign from "./component/Sign";
import ThankU from "./component/ThankU";
import Home from "./component/Home";
import Navebar from "./component/Navebar"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
function App() {
  return (
   <div> 
     <Router>
     <Navebar/>
      <Routes>
         <Route path="/" element = {<Home/>}/>
         <Route path="/about" element = {<About/>}/>
         <Route path="/login" element = {<Login/>}/>
         <Route  path="/sign" element = {<Sign/>}/> 
         <Route path="/thankU" element = {<ThankU/>}/>
      </Routes>
     </Router>
   </div>
  );
}

export default App;
