// selecting elements
let menuIcon = document.getElementById("menu-icon");
let mobMenu = document.getElementById("mob-menu")
// adding responsive menu
menuIcon.addEventListener("click", () => {
    mobMenu.classList.toggle("hidden");
});
// hidding the menu when it is clicked
function hideMenu() {
    mobMenu.classList.add("hidden");
}

// all products data
allProducts = [
    {
        image: "./images/atomic hapits.jpg",
        name: "Atomic Habits",
        author: "James Clear",
        price: 29.99,
    },
    {
        image: "./images/power of sub.jpg",
        name: "The Power of Subconscious Mind",
        author: "Joseph Murphy",
        price: 19.99,
    },
    {
        image: "./images/rich dad.jpg",
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 39.99,
    },
    {
        image: "./images/art of the war.jpg",
        name: "The Art of War",
        author: "Sun Tzu",
        price: 20.99,
    },
]
// displaying all products
let productContainer = document.getElementById("productContainer");
allProducts.forEach( (product) => {
    productContainer.innerHTML += `<div class="book-card bg-gray-100 p-3">
                    <img src="${product.image}" alt="book" class="w-full object-cover">
                    <div class="book-info py-3">
                        <h1 class="text-xl font-inter font-bold text-[#161616]">${product.name}</h1>
                        <h3 class="font-inter text-[#161616] text-[18px]"><b>Author:</b> ${product.author}</h3>
                        <h3 class="text-[#161616] font-inter text-[18px]"><b>price:</b> $${product.price}</h3>
                    </div>
                    <button class="bg-[#DDF247] text-[#161616] px-6 py-2 rounded-sm space-y-1">Buy Now</button>
                </div>`;
});
