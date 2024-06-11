import React, { useContext } from "react";
import styles from "./ItemsS.module.css"
import EachItemComponent from "./EachItem";
import {context} from '../App'
// let arr = [1,2,3,4,4,3,4,5,6];
function ItemsComponent(){
    let {itemList} = useContext(context)
    return(
        <div className={styles.container}>
        <div className="row ">
            {
                itemList.map(ele=>{
                    return <EachItemComponent item={ele} key={ele.id}/>
                })   
            }
        </div>
        </div>
    )
}
export default ItemsComponent;