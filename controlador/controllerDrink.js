import { dataDrink } from "../modelo/modeloDrink.js";
import { drinkView} from "../vista/viewDrink.js";
console.log(dataDrink)
const buttonCall = document.getElementById("btnListar");
buttonCall.addEventListener("click", async()=>{
    try {
        const res = await fetch(dataDrink)
           const data = await res.json(); 
           console.log(data)
         drinkView(data);
          
    } catch (error) {
        console.log(error);
    }
    
});
const reload = async() =>{
try {
    const res = await fetch(dataDrink)
       const data = await res.json(); 
       console.log(data)
     drinkView(data);
      
} catch (error) {
    console.log(error);
}
}
   reload()
 