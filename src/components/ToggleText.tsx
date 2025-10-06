import { useState } from "react";
function ToggleText() {
    const[isVisible,setIsVisible]=useState(false);

    const toggleVisibility=()=>{
        setIsVisible(!isVisible);
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p>Hello ! React</p>}
        </div>
    )
}
export default ToggleText;
