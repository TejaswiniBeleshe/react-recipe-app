import React, { useContext, useEffect, useState } from "react";
import styles from './RecipeS.module.css';
import { context } from '../../App';
import RecipeStepComponent from "./RecipeSteps";
import RecipeIngreComponent from "./RecipeIngre";

function RecipeComponent() {
    let [resObj, setObj] = useState({});
    let { resId } = useContext(context);
    let [load,setLoad] = useState(true)

    useEffect(() => {
        async function getRecipeSteps() {
            try {
                let respo = await fetch(`https://api.spoonacular.com/recipes/${resId}/information?apiKey=7f08ed9fb159444297b7fcc528fe5e34`);
                let data = await respo.json();
                // console.log(data);
                setObj({ 'vegetarian': data.vegetarian, 'radyInMinutes': data.radyInMinutes, 'servings': data.servings, 'title': data.title, 'image': data.image,'intru':data.analyzedInstructions[0].steps,'price':data.pricePerServing,'ingrediance':data.extendedIngredients});
                setLoad(false)

            }
            catch (err) {
                throw new Error('alert');
            }
        }
        getRecipeSteps();

    }, [resId]);
    // console.log(resObj)
    return (
        <div className={`${styles.parent} d-flex flex-column flex-lg-row justify-content-between`}>
           <RecipeStepComponent resObj={resObj} load={load}/>
            <RecipeIngreComponent resObj={resObj} load={load}/>
        </div>
    );
}
export default RecipeComponent;
