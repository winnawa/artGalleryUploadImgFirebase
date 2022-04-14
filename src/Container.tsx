import React from "react"
import styles from './Container.module.css'
const Container : React.FC = (props)=>{
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )

}
export default Container