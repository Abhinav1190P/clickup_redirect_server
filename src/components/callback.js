import { useEffect } from "react";
const Callback = () => {

    useEffect(()=>{
        if(!window.localStorage.getItem('code')){
            const code = window.location?.search?.split('=')[1]
            window.localStorage.setItem('code',JSON.stringify(code))
        }
       
       

    },[])

    return ( 
        <div>
            Hey this is a Callback page
        </div>
     );
}
 
export default Callback;