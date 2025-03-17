let menu = {}; 
let idCounter = 1;  

function themMonAn(danhMuc, tenMon, gia, moTa) {  
    if (!menu[danhMuc]) {  
        menu[danhMuc] = [];  
    }  
    let monAn = {  
        id: idCounter++,  
        name: tenMon,  
        price: gia,  
        description: moTa  
    };  
    menu[danhMuc].push(monAn);  
    console.log("Thêm món ăn thành công vào danh mục:", danhMuc);  
}  

function xoaMonAn(danhMuc, tenMon) {  
    if (menu[danhMuc]) {  
        let index = menu[danhMuc].findIndex(mon => mon.name === tenMon);  
        if (index !== -1) {  
            menu[danhMuc].splice(index, 1);  
            console.log("Xóa món ăn thành công:", tenMon);  
        } else {  
            console.log("Không tìm thấy món ăn trong danh mục này.");  
        }  
    } else {  
        console.log("Danh mục không tồn tại.");  
    }  
}  

function capNhatMonAn(danhMuc, tenMonCu, tenMonMoi, giaMoi, moTaMoi) {  
    if (menu[danhMuc]) {  
        let monAn = menu[danhMuc].find(mon => mon.name === tenMonCu);  
        if (monAn) {  
            monAn.name = tenMonMoi;  
            monAn.price = giaMoi;  
            monAn.description = moTaMoi;  
            console.log("Cập nhật món ăn thành công.");  
        } else {  
            console.log("Không tìm thấy món ăn trong danh mục để cập nhật.");  
        }  
    } else {  
        console.log("Danh mục không tồn tại.");  
    }  
}  

function hienThiToanBoMenu() {  
    console.log("Toàn bộ menu:");  
    for (let danhMuc in menu) {  
        console.log("Danh mục:", danhMuc);  
        menu[danhMuc].forEach(mon => {  
            console.log(`- Tên: ${mon.name}, Giá: ${mon.price}, Mô tả: ${mon.description}`);  
        });  
    }  
}  

function timKiemMonAn(tenMon) {  
    console.log("Kết quả tìm kiếm cho món:", tenMon);  
    let found = false;  
    for (let danhMuc in menu) {  
        let monAn = menu[danhMuc].find(mon => mon.name.toLowerCase() === tenMon.toLowerCase());  
        if (monAn) {  
            console.log(`Danh mục: ${danhMuc}, Tên: ${monAn.name}, Giá: ${monAn.price}, Mô tả: ${monAn.description}`);  
            found = true;  
        }  
    }  
    if (!found) {  
        console.log("Không tìm thấy món ăn.");  
    }  
}  
let choice;  
do {  
    console.log("1. Thêm món ăn vào danh mục");  
    console.log("2. Xóa món ăn theo tên trong danh mục");  
    console.log("3. Cập nhật thông tin món ăn theo tên");  
    console.log("4. Hiển thị toàn bộ menu");  
    console.log("5. Tìm kiếm món ăn");  
    console.log("6. Thoát");  

    choice = +prompt("Mời bạn nhập lựa chọn:");  

    switch (choice) {  
        case 1:  
            let danhMuc = prompt("Nhập tên danh mục:");  
            let tenMon = prompt("Nhập tên món ăn:");  
            let gia = prompt("Nhập giá món ăn:");  
            let moTa = prompt("Nhập mô tả món ăn:");  
            themMonAn(danhMuc, tenMon, gia, moTa);  
            break;  
        case 2:  
            danhMuc = prompt("Nhập tên danh mục:");  
            tenMon = prompt("Nhập tên món ăn cần xóa:");  
            xoaMonAn(danhMuc, tenMon);  
            break;  
        case 3:  
            danhMuc = prompt("Nhập tên danh mục:");  
            let tenMonCu = prompt("Nhập tên món ăn cần cập nhật:");  
            let tenMonMoi = prompt("Nhập tên mới:");  
            let giaMoi = prompt("Nhập giá mới:");  
            let moTaMoi = prompt("Nhập mô tả mới:");  
            capNhatMonAn(danhMuc, tenMonCu, tenMonMoi, giaMoi, moTaMoi);  
            break;  
        case 4:  
            hienThiToanBoMenu();  
            break;  
        case 5:  
            tenMon = prompt("Nhập tên món ăn cần tìm:");  
            timKiemMonAn(tenMon);  
            break;  
        case 6:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 6);  