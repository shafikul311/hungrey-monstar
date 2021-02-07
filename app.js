// const searchInput = document.getElementById('searchInput');


const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchBtn =>{
    const foodName = document.getElementById('searchInput').value;
    // mealList();
    
})



// function mealList(){

//     let searchInput = document.getElementById('searchInput').value;
//     console.log(searchInput);


//     // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
// .then(res => res.json())
// .then(data => console.log(data[0].name))

// }

// mealList();

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
.then(res => res.json())
.then(data => displayMeals(data.meals))

const displayMeals = mList => {
    for (let i = 0; i < mList.length; i++) {
        const element = mList[i];
        console.log(element.strMeal);
        
    }
 

   
    // console.log(mList.meals);
}