let products = []; // Define an empty array to store the products

   
    const productsUrl = "product.json";

    const xhr = new XMLHttpRequest();

  
    xhr.open("GET", productsUrl);

    xhr.setRequestHeader("Accept", "application/json");

 
    xhr.send();


    xhr.onload = function() {
      if (xhr.status === 200) {
  
        products = JSON.parse(xhr.responseText); // Store the parsed products
        parseProducts(products); // Parse and display the products

      
        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", function() {

          const filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.value.toLowerCase()));

          parseProducts(filteredProducts);
        });
      } else {
  
        console.log(xhr.statusText);
      }
    };


    function parseProducts(products) {
    
      const productList = document.getElementById("productList");


      productList.innerHTML = "";

      
      products.forEach(product => {
       
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

 
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productDiv.appendChild(productImage);

     
        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productDescription = document.createElement("p");
        productDescription.classList.add("product-description");
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

     
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = `$${product.price}`;
        productDiv.appendChild(productPrice);

   
        productList.appendChild(productDiv);
      });
    }

    const sortButtons = document.querySelectorAll(".sort-button");
    sortButtons.forEach(button => {
      button.addEventListener("click", function() {
    
        const sortedProducts = [...products];

        if (this.dataset.sort === "price") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (this.dataset.sort === "name") {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        parseProducts(sortedProducts);
      });
    });
