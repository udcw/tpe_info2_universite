// // Liste des produits disponibles
// const availableProducts = [
//     { id: 1, name: "Chaise en bois", price: 35, image: "assets/images/1.jpg"},
//     { id: 2, name: "Table en verre", price: 75, image: "assets/images/2.jpg" },
//     { id: 3, name: "Canapé en cuir", price: 120, image: "assets/images/3.jpg" },
//     { id: 4, name: "Lampe moderne", price: 45, image: "assets/images/4.jpg" },
//     { id: 5, name: "Table de nuit", price: 40, image: "assets/images/5.jpg" },
//     { id: 6, name: "Miroir mural", price: 60, image: "assets/images/6.jpg" },
//     { id: 7, name: "Bibliothèque en bois", price: 85, image: "assets/images/7.jpg" },
//     { id: 8, name: "Tapis moderne", price: 50, image: "assets/images/8.jpg" },
//     { id: 9, name: "Coussins décoratifs", price: 20, image: "assets/images/9.jpg" },
//     { id: 10, name: "Horloge murale", price: 30, image: "assets/images/10.jpg" },
// ];

// // Liste des produits ajoutés au panier
// const productsInCart = [];

// // Sélectionner les éléments HTML
// const cartItemsContainer = document.getElementById('cart-items');
// const totalPriceElement = document.querySelector('.total-price');
// const productListContainer = document.getElementById('product-list');

// // Fonction pour afficher les produits disponibles
// function displayProducts() {
//     availableProducts.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.classList.add('col-md-4', 'product-card');
//         productItem.innerHTML = `
//             <div class="card">
//                 <img src="${product.image}" class="card-img-top" alt="${product.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.name}</h5>
//                     <p class="card-text">${product.price}€</p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au Panier</button>
//                 </div>
//             </div>
//         `;
//         productListContainer.appendChild(productItem);
//     });
// }

// // Fonction pour ajouter un produit au panier
// function addToCart(id) {
//     const product = availableProducts.find(product => product.id === id);
//     const cartProduct = productsInCart.find(p => p.id === id);
    
//     if (cartProduct) {
//         cartProduct.quantity += 1; // Si le produit est déjà dans le panier, augmenter la quantité
//     } else {
//         productsInCart.push({ ...product, quantity: 1 }); // Ajouter le produit avec une quantité de 1
//     }

//     displayCart(); // Mettre à jour l'affichage du panier
// }

// // Fonction pour afficher les produits dans le panier
// function displayCart() {
//     cartItemsContainer.innerHTML = ''; // Réinitialiser le contenu
//     let total = 0;

//     productsInCart.forEach(product => {
//         total += product.price * product.quantity;

//         // Créer un élément pour chaque produit
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
//         cartItem.innerHTML = `
//             <div class="d-flex align-items-center">
//                 <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//                 <span>${product.name} - ${product.price}€</span>
//             </div>
//             <div>
//                 <input type="number" min="1" value="${product.quantity}" class="form-control d-inline-block quantity-input" style="width: 60px; margin-right: 10px;" onchange="updateQuantity(${product.id}, this.value)">
//                 <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Supprimer</button>
//             </div>
//         `;
//         cartItemsContainer.appendChild(cartItem);
//     });

//     // Mettre à jour le prix total
//     totalPriceElement.textContent = `${total}€`;
// }

// // Fonction pour mettre à jour la quantité d'un produit
// function updateQuantity(id, newQuantity) {
//     const product = productsInCart.find(product => product.id === id);
//     if (product) {
//         product.quantity = parseInt(newQuantity);
//     }
//     displayCart(); // Réafficher le panier après la modification
// }

// // Fonction pour supprimer un produit du panier
// function removeFromCart(id) {
//     const index = productsInCart.findIndex(product => product.id === id);
//     if (index > -1) {
//         productsInCart.splice(index, 1); // Supprimer le produit du tableau
//     }
//     displayCart(); // Réafficher le panier après la suppression
// }

// // Initialiser l'affichage des produits et du panier
// displayProducts();
// displayCart();























// // Liste des produits disponibles
// const availableProducts = [
//     { id: 1, name: "Chaise en bois", price: 35, image: "assets/images/1.jpg" },
//     { id: 2, name: "Table en verre", price: 75, image: "assets/images/2.jpg" },
//     { id: 3, name: "Canapé en cuir", price: 120, image: "assets/images/3.jpg" },
//     { id: 4, name: "Lampe moderne", price: 45, image: "assets/images/4.jpg" },
//     { id: 5, name: "Table de nuit", price: 40, image: "assets/images/5.jpg" },
//     { id: 6, name: "Miroir mural", price: 60, image: "assets/images/6.jpg" },
//     { id: 7, name: "Bibliothèque en bois", price: 85, image: "assets/images/7.jpg" },
//     { id: 8, name: "Tapis moderne", price: 50, image: "assets/images/8.jpg" },
//     { id: 9, name: "Coussins décoratifs", price: 20, image: "assets/images/9.jpg" },
//     { id: 10, name: "Horloge murale", price: 30, image: "assets/images/10.jpg" },
// ];

// // Charger le panier depuis le LocalStorage ou initialiser un tableau vide
// let productsInCart = JSON.parse(localStorage.getItem('cart')) || [];

// // Sélectionner les éléments HTML
// const cartItemsContainer = document.getElementById('cart-items');
// const totalPriceElement = document.querySelector('.total-price');
// const productListContainer = document.getElementById('product-list');

// // Fonction pour afficher les produits disponibles
// function displayProducts() {
//     availableProducts.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.classList.add('col-md-4', 'product-card');
//         productItem.innerHTML = `
//             <div class="card mb-4">
//                 <img src="${product.image}" class="card-img-top" alt="${product.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.name}</h5>
//                     <p class="card-text">${product.price}€</p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au Panier</button>
//                 </div>
//             </div>
//         `;
//         productListContainer.appendChild(productItem);
//     });
// }

// // Fonction pour ajouter un produit au panier
// function addToCart(id) {
//     const product = availableProducts.find(product => product.id === id);
//     const cartProduct = productsInCart.find(p => p.id === id);
    
//     if (cartProduct) {
//         cartProduct.quantity += 1; // Si le produit est déjà dans le panier, augmenter la quantité
//     } else {
//         productsInCart.push({ ...product, quantity: 1 }); // Ajouter le produit avec une quantité de 1
//     }

//     updateLocalStorage(); // Mettre à jour le LocalStorage
//     displayCart(); // Mettre à jour l'affichage du panier
// }

// // Fonction pour mettre à jour le LocalStorage
// function updateLocalStorage() {
//     localStorage.setItem('cart', JSON.stringify(productsInCart)); // Sauvegarder le panier dans le LocalStorage
// }

// // Fonction pour afficher les produits dans le panier
// function displayCart() {
//     cartItemsContainer.innerHTML = ''; // Réinitialiser le contenu
//     let total = 0;

//     productsInCart.forEach(product => {
//         total += product.price * product.quantity;

//         // Créer un élément pour chaque produit
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
//         cartItem.innerHTML = `
//             <div class="d-flex align-items-center">
//                 <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//                 <span>${product.name} - ${product.price}€</span>
//             </div>
//             <div>
//                 <input type="number" min="1" value="${product.quantity}" class="form-control d-inline-block quantity-input" style="width: 60px; margin-right: 10px;" onchange="updateQuantity(${product.id}, this.value)">
//                 <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Supprimer</button>
//             </div>
//         `;
//         cartItemsContainer.appendChild(cartItem);
//     });

//     // Mettre à jour le prix total
//     totalPriceElement.textContent = `${total}€`;
// }

// // Fonction pour mettre à jour la quantité d'un produit
// function updateQuantity(id, newQuantity) {
//     const product = productsInCart.find(product => product.id === id);
//     if (product) {
//         product.quantity = parseInt(newQuantity);
//     }
//     updateLocalStorage(); // Mettre à jour le LocalStorage après la modification
//     displayCart(); // Réafficher le panier après la modification
// }

// // Fonction pour supprimer un produit du panier
// function removeFromCart(id) {
//     const index = productsInCart.findIndex(product => product.id === id);
//     if (index > -1) {
//         productsInCart.splice(index, 1); // Supprimer le produit du tableau
//     }
//     updateLocalStorage(); // Mettre à jour le LocalStorage après la suppression
//     displayCart(); // Réafficher le panier après la suppression
// }

// // Initialiser l'affichage des produits et du panier
// displayProducts();
// displayCart();






let currentUsername = '';
let productsInCart = [];

// Liste des produits disponibles
const availableProducts = [
    { id: 1, name: "Chaise en bois", price: 35, image: "assets/images/1.jpg"},
    { id: 2, name: "Table en verre", price: 75, image: "assets/images/2.jpg" },
    { id: 3, name: "Canapé en cuir", price: 120, image: "assets/images/3.jpg" },
    { id: 4, name: "Lampe moderne", price: 45, image: "assets/images/4.jpg" },
    { id: 5, name: "Table de nuit", price: 40, image: "assets/images/5.jpg" },
    { id: 6, name: "Miroir mural", price: 60, image: "assets/images/6.jpg" },
    { id: 7, name: "Bibliothèque en bois", price: 85, image: "assets/images/7.jpg" },
    { id: 8, name: "Tapis moderne", price: 50, image: "assets/images/8.jpg" },
    { id: 9, name: "Coussins décoratifs", price: 20, image: "assets/images/9.jpg" },
    { id: 10, name: "Horloge murale", price: 30, image: "assets/images/10.jpg" },
];

// Fonction pour afficher les produits disponibles
function displayProducts() {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = ''; // Réinitialiser le contenu

    availableProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'product-card');
        productItem.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}€</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au Panier</button>
                </div>
            </div>
        `;
        productListContainer.appendChild(productItem);
    });
}

// Fonction pour ajouter un produit au panier
function addToCart(id) {
    const product = availableProducts.find(product => product.id === id);
    const cartProduct = productsInCart.find(p => p.id === id);
    
    if (cartProduct) {
        cartProduct.quantity += 1; // Si le produit est déjà dans le panier, augmenter la quantité
    } else {
        productsInCart.push({ ...product, quantity: 1 }); // Ajouter le produit avec une quantité de 1
    }

    displayCart(); // Mettre à jour l'affichage du panier
}

// Fonction pour afficher les produits dans le panier
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    cartItemsContainer.innerHTML = ''; // Réinitialiser le contenu
    let total = 0;

    productsInCart.forEach(product => {
        total += product.price * product.quantity;

        // Créer un élément pour chaque produit
        const cartItem = document.createElement('div');
        cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        cartItem.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <span>${product.name} - ${product.price}€</span>
            </div>
            <div>
                <input type="number" min="1" value="${product.quantity}" class="form-control d-inline-block quantity-input" style="width: 60px; margin-right: 10px;" onchange="updateQuantity(${product.id}, this.value)">
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Supprimer</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Mettre à jour le prix total
    totalPriceElement.textContent = `${total}€`;
}

// Fonction pour mettre à jour la quantité d'un produit
function updateQuantity(id, newQuantity) {
    const product = productsInCart.find(product => product.id === id);
    if (product) {
        product.quantity = parseInt(newQuantity);
    }
    displayCart(); // Réafficher le panier après la modification
}

// Fonction pour supprimer un produit du panier
function removeFromCart(id) {
    const index = productsInCart.findIndex(product => product.id === id);
    if (index > -1) {
        productsInCart.splice(index, 1); // Supprimer le produit du tableau
    }
    displayCart(); // Réafficher le panier après la suppression
}

// Fonction de connexion
function login() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    
    if (username) {
        localStorage.setItem('currentUser', username); // Enregistre l'utilisateur dans LocalStorage
        usernameInput.value = ''; // Vide le champ d'entrée
        currentUsername = username; // Met à jour l'utilisateur actuel
        loadCart(); // Charge le panier de l'utilisateur
    } else {
        alert('Veuillez entrer un nom d\'utilisateur.');
    }
}

// Fonction de déconnexion
function logout() {
    localStorage.removeItem('currentUser'); // Supprime l'utilisateur du LocalStorage
    currentUsername = ''; // Réinitialise l'utilisateur actuel
    productsInCart = []; // Réinitialise le panier
    displayCart(); // Affiche le panier vide
    displayProducts(); // Réaffiche les produits
}

// Vérifier si un utilisateur est connecté
function checkUser() {
    const storedUsername = localStorage.getItem('currentUser');
    if (storedUsername) {
        currentUsername = storedUsername;
        loadCart(); // Charge le panier si l'utilisateur est connecté
    }
}

// Charger le panier de l'utilisateur
function loadCart() {
    // Ici, vous pouvez implémenter une logique pour charger le panier d'un utilisateur
    // Par exemple, en utilisant une API ou en sauvegardant le panier dans le LocalStorage
    displayProducts();
    displayCart();
}

// Appeler la fonction pour vérifier l'utilisateur à l'initialisation
checkUser();
