const searchBox=document.querySelector(".search");
const searchBtn=document.querySelector(".searchBtn");
const recipedetails=document.querySelector(".recipe-details");
const searchRecipes = async (details)=>{
recipedetails.innerHTML="please wait i am fetching your cakes..."
 const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`);
const response= await data.json();
recipedetails.innerHTML="";

response.meals.forEach(meal => {

  const divRecipe=document.createElement('div');
  divRecipe.classList.add('recipe');
  divRecipe.innerHTML=`<img src="${meal.strMealThumb}">
<h3>${meal.strMeal}</h3>
<p>${meal.strArea}</p>
<p>${meal.strCategory}</p>

  `
  const btn1=document.createElement('btns');
  btn1.textContent="cake recipe";
  divRecipe.appendChild(btn1);

  
  recipedetails.appendChild(divRecipe);
});
}
searchBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  const searchInput=searchBox.value.trim();
  searchRecipes(searchInput);
});
function changebackground(){
  document.getElementById("change").style.background="pink";}
  