let cart = [];
let cartCountElement = document.querySelector('.cart-button');

function updateCartCount() {
    cartCountElement.textContent = `Giỏ hàng (${cart.length})`;
}

function addToCart(productName, productPrice, productImage) {
    const product = { name: productName, price: parseInt(productPrice), image: productImage };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    updateCartCount();
}

// Khởi tạo sự kiện cho nút "Thêm vào giỏ hàng"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const productImage = this.getAttribute('data-product-image'); // Lấy đường dẫn hình ảnh
            addToCart(productName, productPrice, productImage); // Gọi hàm với hình ảnh
            alert(`${productName} đã được thêm vào giỏ hàng!`);
        });
    });
});