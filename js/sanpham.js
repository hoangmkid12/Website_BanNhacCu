// Thêm thuộc tính data-category cho tất cả các thẻ sản phẩm trong HTML
document.querySelectorAll('.product-card').forEach(card => {
    // Lấy tên sản phẩm từ thẻ và chuyển thành chữ thường
    const productName = card.querySelector('.product-name').textContent.toLowerCase();

    // Xác định danh mục dựa trên tên sản phẩm
    let category = '';
    if (productName.includes('guitar')) {
        category = 'guitar';
    } else if (productName.includes('violin')) {
        category = 'violin';
    } else if (productName.includes('piano')) {
        category = 'piano';
    } else if (productName.includes('organ')) {
        category = 'organ';
    } else if (productName.includes('trống') || productName.includes('drums')) {
        category = 'drums';
    } else if (productName.includes('kèn') || productName.includes('trumpet')) {
        category = 'trumpet';
    }

    // Gán danh mục vào thuộc tính data-category
    card.setAttribute('data-category', category);
});

// Hàm lọc sản phẩm nâng cao
function filterProducts() {
    // Lấy tất cả các checkbox danh mục
    const checkboxes = document.querySelectorAll('.category-list input[type="checkbox"]');
    // Lấy danh sách các danh mục đã được chọn
    const selectedCategories = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Lấy tất cả sản phẩm
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0; // Đếm số sản phẩm hiển thị

    // Lọc từng sản phẩm
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');

        // Hiển thị sản phẩm nếu không có danh mục nào được chọn
        // hoặc sản phẩm thuộc danh mục đã chọn
        if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });

    // Cập nhật số lượng kết quả hiển thị
    const resultCount = document.querySelector('.filter span');
    if (resultCount) {
        resultCount.textContent = `Hiển thị ${visibleCount} kết quả`;
    }
}

// Thêm sự kiện lắng nghe cho các checkbox
document.querySelectorAll('.category-list input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Chạy hàm lọc lần đầu để thiết lập trạng thái ban đầu
filterProducts();