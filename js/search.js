// Lấy tất cả sản phẩm từ trang
function getAllProducts() {
    const products = [];
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const name = card.querySelector('.product-name').textContent;
        const price = card.querySelector('.product-price').textContent.split('₫')[0].trim();
        const description = card.querySelector('.product-description').textContent;
        const image = card.querySelector('.product-image img').src;
        const detailLink = card.querySelector('.detail-button').href;

        products.push({
            name,
            price,
            description,
            image,
            detailLink,
            element: card
        });
    });

    console.log(products); // Kiểm tra danh sách sản phẩm
    return products;
}

// Hàm tìm kiếm sản phẩm
function searchProducts(searchTerm) {
    const products = getAllProducts();
    if (!searchTerm.trim()) {
        hideSearchResults();
        return;
    }

    const searchResults = products.filter(product => {
        const searchString = (product.name + ' ' + product.description).toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    console.log(searchResults); // Kiểm tra kết quả tìm kiếm
    displaySearchResults(searchResults);
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // Xóa nội dung cũ
    searchResultsContainer.style.display = 'block'; // Hiện kết quả

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p class="no-results">Không tìm thấy sản phẩm phù hợp</p>';
        return;
    }

    const resultsHTML = results.map(product => `
        <div class="search-result-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <h4>${product.name}</h4>
                <p class="price">${product.price}₫</p>
                <a href="${product.detailLink}" class="view-detail">Xem chi tiết</a>
            </div>
        </div>
    `).join('');

    searchResultsContainer.innerHTML = resultsHTML; // Cập nhật kết quả
}

// Ẩn kết quả tìm kiếm
function hideSearchResults() {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.style.display = 'none'; // Ẩn kết quả
}

// Khởi tạo sự kiện tìm kiếm
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('.search-form');

    // Xử lý sự kiện submit form tìm kiếm
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định
        searchProducts(searchInput.value); // Tìm kiếm sản phẩm
    });

    // Tìm kiếm realtime khi người dùng gõ
    searchInput.addEventListener('input', function() {
        searchProducts(this.value); // Gọi hàm tìm kiếm
    });

    // Ẩn kết quả tìm kiếm khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#search-results') && !e.target.closest('.search-form')) {
            hideSearchResults(); // Ẩn kết quả
        }
    });
});