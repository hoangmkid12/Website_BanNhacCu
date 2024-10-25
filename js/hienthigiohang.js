function displayCartItems() {
    cartItemsContainer.innerHTML = ''; // Xóa nội dung cũ

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
            <h4>${item.name}</h4>
            <p>Giá: ${item.price.toLocaleString()}₫</p>
        `;

        cartItemsContainer.appendChild(cartItemDiv);
        totalPrice += item.price; // Tính tổng giá
    });

    totalPriceElement.textContent = `${totalPrice.toLocaleString()}₫`; // Định dạng tổng giá
}