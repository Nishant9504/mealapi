let searchIcon=document.getElementById('search-icon');
let favDetail= document.getElementById('fav-detail');
// let favIcon=document.getElementById('fav-icon');
// let detail =document.getElementById('add-detail');
let container= document.getElementById('dish-image');

// let imgs =document.getElementById('image-id');
// console.log(imgs);

searchIcon.addEventListener('click',function(){
   console.log("hello");
   let searchInput=document.getElementById('search-item').value;
   // console.log(searchInput);
var xhr=new XMLHttpRequest();
xhr.open('get',`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,true);
console.log(xhr.open('get',`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,true));
xhr.send();
xhr.onload= function(data){
   console.log(data);
   var jsonresponse= JSON.parse(xhr.response);
    console.log(jsonresponse.meals);
    let mealsArray =jsonresponse.meals;
    let black=true;
   //  let fav = [];
   for(let i=0;i<mealsArray.length;i++){
//     console.log(mealsArray[i].strMeal);
//    imgs.setAttribute('src',jsonresponse.meals[i].strMealThumb);
//    favIcon.setAttribute('class',"fa-regular fa-heart");
//   detail.innerText="show details";
let mealImg= jsonresponse.meals[i].strMealThumb;
let mealName =jsonresponse.meals[i].strMeal;
let favMeal =jsonresponse.meals[i].idMeal;
let imgDiv= document.createElement('div');
let imgDish = document.createElement('img');
let favIcon = document.createElement('i');
let viewDetail= document.createElement('a');
imgDiv.setAttribute('class','image-container');
imgDish.setAttribute('class','image-id');
imgDish.setAttribute('src',mealImg);
favIcon.setAttribute('class','fa-solid fa-heart');

 favIcon.addEventListener('click',function(){
//    let color=true;
   if(black){
     favIcon.style.color="red";
   //   fav.push(favMeal);
   //   console.log(fav);
     localStorage.setItem(mealName,mealImg);
     black =false;
 }
   else{
      favIcon.style.color="black";
       localStorage.removeItem(mealName);
      black=true;
   }

 });
  
      //  localStorage.removeItem('idMeal',idMeal);
   


viewDetail.setAttribute('id','view-detail');
viewDetail.setAttribute('href','../detail/detail.html');
viewDetail.innerText="view Detail";
imgDiv.appendChild(imgDish);
imgDiv.appendChild(favIcon);
imgDiv.appendChild(viewDetail);
container.appendChild(imgDiv);
   }
   }
});




