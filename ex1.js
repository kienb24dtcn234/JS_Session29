let contacts = [];  
let idCounter = 1;  

function themDanhSach(name, email, phone) {  
    let contact = {  
        id: idCounter++,  
        name: name,  
        email: email,  
        phone: phone  
    };  
    contacts.push(contact);  
}  

function hienThiDanhSach() {  
    console.log("Danh sách liên hệ:");  
    contacts.forEach(contact => {  
        console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, Điện thoại: ${contact.phone}`);  
    });  
}  

function timKiemTheoSoDienThoai(phone) {  
    let contact = contacts.find(contact => contact.phone === phone);  
    if (contact) {  
        console.log(`Tìm thấy: ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, Điện thoại: ${contact.phone}`);  
    } else {  
        console.log("Không tìm thấy liên hệ với số điện thoại này.");  
    }  
}    

function capNhat(id, name, email, phone) {  
    let contact = contacts.find(contact => contact.id === id);  
    if (contact) {  
        contact.name = name;  
        contact.email = email;  
        contact.phone = phone;  
        console.log("Cập nhật thông tin thành công.");  
    } else {  
        console.log("Không tìm thấy liên hệ với ID này.");  
    }  
}  

function xoaDanhSach(id) {  
    let index = contacts.findIndex(contact => contact.id === id);  
    if (index !== -1) {  
        contacts.splice(index, 1);  
        console.log("Xóa liên hệ thành công.");  
    } else {  
        console.log("Không tìm thấy liên hệ với ID này.");  
    }  
}  
let choice;
do {  
    console.log("1. Thêm đối tượng Contact vào danh sách liên hệ");  
    console.log("2. Hiển thị danh sách danh bạ");  
    console.log("3. Tìm kiếm thông tin Contact theo số điện thoại");  
    console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id");  
    console.log("5. Xóa một đối tượng Contact khỏi danh sách theo id");  
    console.log("6. Thoát");  

    let choice = +prompt("Mời bạn nhập lựa chọn:");  

    switch (choice) {  
        case 1:  
            let name = prompt("Nhập tên người liên hệ:");  
            let email = prompt("Nhập email của người liên hệ:");  
            let phone = prompt("Nhập số điện thoại của người liên hệ:");  
            themDanhSach(name, email, phone);  
            break;  
        case 2:  
            hienThiDanhSach();  
            break;  
        case 3:  
            let searchPhone = prompt("Nhập số điện thoại cần tìm:");  
            timKiemTheoSoDienThoai(searchPhone);  
            break;  
        case 4:  
            let updateId = +prompt("Nhập ID của liên hệ cần cập nhật:");  
            let newName = prompt("Nhập tên mới:");  
            let newEmail = prompt("Nhập email mới:");  
            let newPhone = prompt("Nhập số điện thoại mới:");  
            capNhat(updateId, newName, newEmail, newPhone);  
            break;  
        case 5:  
            let deleteId = +prompt("Nhập ID của liên hệ cần xóa:");  
            xoaDanhSach(deleteId);  
            break;  
        case 6:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 6);  