let users = {};  
let idCounter = 1;  
function dangKyNguoiDung(ten, email, matKhau) {  
    if (!email.includes('@') || !(email.endsWith('.com') || email.endsWith('.vn'))) {  
        console.log("Email không hợp lệ.");  
        return;  
    }  
    if (matKhau.length < 6) {  
        console.log("Mật khẩu phải từ 6 ký tự trở lên.");  
        return;  
    }  
    let user = {  
        id: idCounter++,  
        name: ten,  
        email: email,  
        password: matKhau  
    };  
    users[user.email] = user;  
    console.log("Đăng ký người dùng thành công:", user);  
}  
function dangNhap(email, matKhau) {  
    let user = users[email];  
    if (user && user.password === matKhau) {  
        console.log("Đăng nhập thành công:", user);  
    } else {  
        console.log("Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu.");  
    }  
}  
function thoat() {  
    console.log("Thoát chương trình.");  
}  
let choice;  
do {  
    console.log("1. Đăng ký người dùng mới");  
    console.log("2. Đăng nhập");  
    console.log("3. Thoát");  
    choice = +prompt("Mời bạn nhập lựa chọn:");  
    switch (choice) {  
        case 1:  
            let ten = prompt("Nhập tên người dùng:");  
            let email = prompt("Nhập email:");  
            let matKhau = prompt("Nhập mật khẩu:");  
            dangKyNguoiDung(ten, email, matKhau);  
            break;  
        case 2:  
            let emailLogin = prompt("Nhập email để đăng nhập:");  
            let matKhauLogin = prompt("Nhập mật khẩu:");  
            dangNhap(emailLogin, matKhauLogin);  
            break;  
        case 3:  
            thoat();  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 3);  