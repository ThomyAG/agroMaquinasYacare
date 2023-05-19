const cardContainer = document.getElementById("cardContainer")
const mainProducts = {};
fetch ("./products.json")
    .then(response => response.json())
    .then(products => {
        mainProducts.data = products;
        cardRender(products);
    }); 

    function cardRender(productsArray) {
        cardContainer.innerHTML = " ";
        productsArray.forEach(product => {
            const cardProduct = document.createElement("div");
            cardProduct.className = "cardProduct"
            cardProduct.innerHTML = `
            <h3 class="cardProductName" id=${product.id}> ${product.marca + " " + product.modelo} </3>
            <img class="cardProductImg" id=${product.id} src=${product.imgUrl}>
            <p class="cardProductPrice" id=${product.id}> U$D ${product.precio} </p>
            <button id=${product.id}> Agregar al carrito
            `
            cardContainer.append(cardProduct)
        });
        cardContainer.addEventListener("click", addToCart);
    }