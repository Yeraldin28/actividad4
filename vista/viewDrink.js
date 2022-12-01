
const drinkView = data =>{
  
    console.log(data.drinks[0].strDrink)
    img1.src = data.drinks[0].strDrinkThumb;
    document.getElementById("title").innerHTML = data.drinks[0].strDrink ;
    document.getElementById("paragraph").innerHTML = data.drinks[0].strInstructions ;
   

}
    
           
    



export{ drinkView};