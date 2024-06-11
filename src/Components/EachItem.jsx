import React, { useContext } from "react";
import styles from "./EachItemS.module.css";
import {Link} from 'react-router-dom';
import { context } from "../App";

function EachItemComponent({item}){
    let {setId} = useContext(context)
    return(
        <div className={`col col-12 col-lg-3 mb-4`}>
                <div className={`${styles.items} `}>
                    <img src={item.image} alt="not found" />
                    <div className={`d-flex flex-column justify-content-center align-items-center ${styles.itemBody} my-1`}>
                        <p>{item.title}</p>
                        <Link to='steps'><button onClick={()=>setId(item.id)}>Get Recipe</button></Link>
                    </div>
                </div>
        </div>
    )
}
export default EachItemComponent;