let products = [];  
let idCounter = 1;  

function themSanPham(name, price, category, quantity) {  
    let product = {  
        id: idCounter++,  
        name: name,  
        price: price,  
        category: category,  
        quantity: quantity  
    };  
    products.push(product);  
}  

function hienThiTatCaSanPham() {  
    console.log("Danh sách sản phẩm:");  
    products.forEach(product => {  
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);  
    });  
}  

function chiTietSanPhamTheoId(id) {  
    let product = products.find(product => product.id === id);  
    if (product) {  
        console.log(`Chi tiết sản phẩm: ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);  
    } else {  
        console.log("Không tìm thấy sản phẩm với ID này.");  
    }  
}  

function capNhatSanPham(id, name, price, category, quantity) {  
    let product = products.find(product => product.id === id);  
    if (product) {  
        product.name = name;  
        product.price = price;  
        product.category = category;  
        product.quantity = quantity;  
        console.log("Cập nhật thông tin sản phẩm thành công.");  
    } else {  
        console.log("Không tìm thấy sản phẩm với ID này.");  
    }  
}  

function xoaSanPham(id) {  
    let index = products.findIndex(product => product.id === id);  
    if (index !== -1) {  
        products.splice(index, 1);  
        console.log("Xóa sản phẩm thành công.");  
    } else {  
        console.log("Không tìm thấy sản phẩm với ID này.");  
    }  
}  

let choice;  
do {  
    console.log("1. Thêm sản phẩm vào danh sách sản phẩm");  
    console.log("2. Hiển thị tất cả sản phẩm");  
    console.log("3. Hiển thị chi tiết sản phẩm theo ID");  
    console.log("4. Cập nhật thông tin sản phẩm theo ID");  
    console.log("5. Xóa sản phẩm theo ID");  
    console.log("6. Thoát");  

    choice = +prompt("Mời bạn nhập lựa chọn:");  

    switch (choice) {  
        case 1:  
            let name = prompt("Nhập tên sản phẩm:");  
            let price = prompt("Nhập giá sản phẩm:");  
            let category = prompt("Nhập danh mục sản phẩm:");  
            let quantity = prompt("Nhập số lượng sản phẩm:");  
            themSanPham(name, price, category, quantity);  
            break;  
        case 2:  
            hienThiTatCaSanPham();  
            break;  
        case 3:  
            let detailId = +prompt("Nhập ID sản phẩm cần xem chi tiết:");  
            chiTietSanPhamTheoId(detailId);  
            break;  
        case 4:  
            let updateId = +prompt("Nhập ID của sản phẩm cần cập nhật:");  
            let newName = prompt("Nhập tên mới:");  
            let newPrice = prompt("Nhập giá mới:");  
            let newCategory = prompt("Nhập danh mục mới:");  
            let newQuantity = prompt("Nhập số lượng mới:");  
            capNhatSanPham(updateId, newName, newPrice, newCategory, newQuantity);  
            break;  
        case 5:  
            let deleteId = +prompt("Nhập ID của sản phẩm cần xóa:");  
            xoaSanPham(deleteId);  
            break;  
        case 6:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 6);  