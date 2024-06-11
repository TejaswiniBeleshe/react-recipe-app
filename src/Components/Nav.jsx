import React from "react";
import styles from "./NavS.module.css"


function NavComponent(){
    return(
        <div className={styles.nav}>
            <p>RECIPE APP<span><img id={styles.imge} src="https://cdn-icons-png.flaticon.com/128/3170/3170733.png"/></span></p>
        </div>
        
    )
}
export default NavComponent;