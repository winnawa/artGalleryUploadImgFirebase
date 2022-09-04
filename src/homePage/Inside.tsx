import Container from "../component/Container/Container"
import Header from "../component/Header/Header"
import React from "react"
import { Outlet } from "react-router-dom"
import { TextCenter, TextContainer, TextWidthLimit } from "./styled"
const Inside=()=>{

    return(
        <React.Fragment>
          <Container>
            <Header></Header>
            <TextCenter>
              <TextWidthLimit>
                <TextContainer id="help">
                  "This is a project where we will upload img in the Upload section and Image will be display in the Gallery section."
                </TextContainer>
              </TextWidthLimit>
            </TextCenter>
          </Container>  
          <Outlet/>
        </React.Fragment>
        
    )
}
export default Inside