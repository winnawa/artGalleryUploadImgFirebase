import React from "react";
import Inside from "./homePage/Inside";
import { Route, Routes} from 'react-router-dom'
import Login from "./loginPage/Login";
import Upload from "./uploadPage/Upload";
import Gallery from "./galleryPage/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';


const imgUrlList:string[] = [];

function App() {
  
  return (
    <Routes>
     

        <Route path='/login' element={<Login/>}>

        </Route>

        <Route path='/inside' >
            <Route index={true} element={<Inside/> } ></Route>
            <Route path='upload' element={<Upload  />}  />
            <Route path='gallery' element={<Gallery />}  />
        </Route>
    </Routes>
  );
}

export default App;
