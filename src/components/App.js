// create your App component here
import React,{useEffect,useState} from "react";


const App = () => {
    const[dog,setDog]=useState(null)
    console.log(dog)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=>setDog(data))
    },[])
if(dog===null)
{
    return  <p>Loading...</p>
}
    return ( <div>
        <img src={dog.message} alt="A Random Dog" />
           
            </div> 
    );
}
 
export default App;
