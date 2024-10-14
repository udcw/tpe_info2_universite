// app.js
import { db, auth } from './firebase.js';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const availableProducts = [
    { id: 1, name: "Chaise en bois", price: 35, image: "assets/images/1.jpg" },
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

let userCart = [];

// Sélectionner les éléments HTML
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.querySelector('.total-price');
const productListContainer = document.getElementById('product-list');

// Fonction pour afficher les produits disponibles
function displayProducts() {
    availableProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'product-card'); // Trois cartes par ligne
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
async function addToCart(id) {
    const product = availableProducts.find(product => product.id === id);
    const cartProduct = userCart.find(p => p.id === id);
    
    if (cartProduct) {
        cartProduct.quantity += 1; // Si le produit est déjà dans le panier, augmenter la quantité
    } else {
        userCart.push({ ...product, quantity: 1 }); // Ajouter le produit avec une quantité de 1
    }

    await updateCartInFirebase(); // Mettre à jour le panier dans Firestore
    displayCart(); // Mettre à jour l'affichage du panier
}

// Fonction pour afficher les produits dans le panier
function displayCart() {
    cartItemsContainer.innerHTML = ''; // Réinitialiser le contenu
    let total = 0;

    userCart.forEach(product => {
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
                <input type="number" min="1" value="${product.quantity}" class="form-control d-inline-block quantity-input" style="width: 60px; margin-right: 10px;"
    