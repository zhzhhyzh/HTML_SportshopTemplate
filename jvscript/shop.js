const products = [
    {
        name: "Product 1",
        description: "This is a description of product 1.",
        price: "$10.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 2",
        description: "This is a description of product 2.",
        price: "$15.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 3",
        description: "This is a description of product 3.",
        price: "$20.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 4",
        description: "This is a description of product 4.",
        price: "$25.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 5",
        description: "This is a description of product 5.",
        price: "$30.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 6",
        description: "This is a description of product 6.",
        price: "$35.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 7",
        description: "This is a description of product 7.",
        price: "$40.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 8",
        description: "This is a description of product 8.",
        price: "$45.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Product 9",
        description: "This is a description of product 9.",
        price: "$50.00",
        image: "https://via.placeholder.com/200"
    }
];

function loadProducts() {
    const gridView = document.getElementById('grid-view');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            </div>
        `;

        gridView.appendChild(productElement);
    });
}

window.onload = loadProducts;
