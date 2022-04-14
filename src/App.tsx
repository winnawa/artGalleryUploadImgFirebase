import React from "react";
import Inside from "./component/Inside";
import { Outlet, Route, Routes} from 'react-router-dom'
import Login from "./component/Login";
import Upload from "./component/Body/Upload";
import Gallery from "./component/Body/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';


const imgUrlList:string[] = [];

function App() {
  
  return (
    <Routes>
     

        <Route path='/login' element={<Login/>}>

        </Route>

        <Route path='/inside' >
            <Route index={true} element={<Inside/> } ></Route>
            <Route path='upload' element={<Upload arDisplay={imgUrlList}   />}  />
            <Route path='gallery' element={<Gallery arDisplay={imgUrlList} />}  />
        </Route>
    </Routes>
  );
}

export default App;
