    let mainDiv=document.getElementById('container-div');
    
    for(let i=0;i<localStorage.length;i++){
    localStorage.getItem(localStorage.key(i));
    let imgDiv= document.createElement('div');
    let imgDish = document.createElement('img');
    let favIcon = document.createElement('i');
    favIcon.setAttribute('class','fa-solid fa-heart');
    imgDiv.setAttribute('id','image-container');
    imgDish.setAttribute('id','image-id');
    imgDish.setAttribute('src',localStorage.getItem(localStorage.key(i)));
    imgDiv.appendChild(imgDish);
    imgDiv.appendChild(favIcon);
    mainDiv.appendChild(imgDiv);
    let foodName= document.createElement('p');
    foodName.innerText=localStorage.key(i);
    imgDiv.appendChild(foodName);
    favIcon.style.color="red";
     favIcon.addEventListener('click',function(){
         localStorage.removeItem(foodName.innerText);
         location.reload();
        console.log(foodName.innerText);
           
        console.log("clicked");

    //     let keyClick =localStorage.key;
    //     console.log(keyClick);
    //     // console.log("clicked");
    //     // localStorage.removeItem(localStorage.key(i));
    // })
 });
}