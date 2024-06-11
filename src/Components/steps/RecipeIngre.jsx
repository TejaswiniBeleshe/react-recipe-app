import React from "react";
import styles from '../steps/RecipeIngreS.module.css'
let i=0;
export default function RecipeIngreComponent({resObj,load}){
    return(
        <div className={`${styles.child} ${styles.ingre}`}>
                { load?console.log('wait'):
                    resObj.ingrediance.map(ele=>{
                        return <div className={styles.eachIngre} key={++i}>
                            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ele.image}`} alt="not found" />
                            <div className={styles.discre}>
                            <span>{ele.name}</span>
                            <span>{ele.amount} </span>
                            <span>{ele.unit}</span>
                            </div>
                         
                        </div>
                    })
                }

         </div>
    )
}