import React from "react";
import { useState } from "react";
import styles from "./SearchS.module.css"
import { useEffect } from "react";

function SearchComponent({setList}){
    const [input,setInput] = useState('South')
    useEffect(()=>{
        async function getData(){
            let respo = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=7f08ed9fb159444297b7fcc528fe5e34`)
            let data = await respo.json();
            // console.log(data.results)
            setList(data.results);
        }
        getData()
    },[input]);
    return(
        <div className={styles.ip}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>   
        </div>
    )
}
export default SearchComponent;