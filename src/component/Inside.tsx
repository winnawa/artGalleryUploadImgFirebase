import Container from "../Container"
import Header from "./Header/Header"
import React from "react"
import { Outlet } from "react-router-dom"
const Inside=()=>{

    return(
        <React.Fragment>
          <Container>
            <Header></Header>
          </Container>  
          <Outlet/>
        </React.Fragment>
        
    )
}
export default Inside