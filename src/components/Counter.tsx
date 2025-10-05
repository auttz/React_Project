import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button className='btn btn-outline-success'onClick={()=>setCount(count+1)}>เพิ่ม</button>
            <button className='btn btn-outline-danger'onClick={()=>setCount(count-1)}>ลบ</button>
        </div>
    )
}
export default Counter;