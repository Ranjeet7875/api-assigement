// index.js
let main = document.getElementById("main")
let URL = `https://fakestoreapi.com/products?_page=1&_limit=6`

const init = async () => {
  try {
    let res = await fetch(URL)
    let data = await res.json()
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
init()

const displayData = (data) => {
  data.forEach(function (product) {
    let productCard = document.createElement("div")
    productCard.className = "product-card"

    let productImg = document.createElement("img")
    productImg.src = product.image

    let title = document.createElement("p")
    title.innerText = product.title

    let price = document.createElement("p")
    price.innerText = "INR : " + product.price

    productCard.append(productImg, title, price)

    main.append(productCard)
  })
}
