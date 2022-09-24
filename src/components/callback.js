import { useEffect } from "react";
import './style.css'


const Callback = () => {

    useEffect(()=>{
        if(!window.localStorage.getItem('code')){
            const code = window.location?.search?.split('=')[1]
            window.localStorage.setItem('code',JSON.stringify(code))
        }
       
       

    },[])

    return ( 
        <div className="card">
      <div style={{"border-radius":"200px", "height":"200px", "width":"200px", "background": "#F8FAF5", "margin":"0 auto"}}>
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>You have successfully<br/> connected to ClickUp</p>
      </div>
     );
}
 
export default Callback;