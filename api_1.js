document.getElementById('get-cate-data').addEventListener('click',getcate)
function getcate(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
}

document.getElementById('get-ingredient-data').addEventListener('click',ingredient)
function ingredient(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
}