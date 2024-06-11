import React from "react";
import styles from '../steps/RecipeStepS.module.css'
export default function RecipeStepComponent({resObj,load}){
    return(
        <div className={`${styles.child} mb-4`}>
        <h2><span>{resObj.vegetarian?'🟢':'🔴'}</span>{resObj.title}</h2>
        <img src={`${resObj.image}`} alt='Not found' />
        <div id={`${styles.info}`}>
        
        <span>⏰{resObj.readyInMinutes}Min</span>
        <span>Serve:{resObj.servings}</span>
        <span>${(resObj.price/100).toFixed(2)}</span>
     </div>
        <div className='childbody'>
            <ol>
              {load?console.log('wait'):resObj.intru.map(element => {
                    return <li key={element.number}>{element.step}</li>
                    
                })}
            </ol>
        </div>
    </div>
    )
}

