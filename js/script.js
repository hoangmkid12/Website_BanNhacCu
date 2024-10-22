document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");
    const productList = document.querySelectorAll(".product");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn không cho trang reload khi submit form
        const searchTerm = searchInput.value.toLowerCase();
        let resultsFound = false;

        productList.forEach(function(product) {
            const productName = product.querySelector("h2").textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block"; // Hiển thị sản phẩm khớp với từ khóa
                resultsFound = true;
            } else {
                product.style.display = "none"; // Ẩn sản phẩm không khớp
            }
        });

        // Hiển thị thông báo nếu không tìm thấy sản phẩm nào
        const searchResults = document.getElementById("search-results");
        if (!resultsFound) {
            searchResults.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
        } else {
            searchResults.innerHTML = ""; // Xóa thông báo nếu có kết quả
        }
    });
});