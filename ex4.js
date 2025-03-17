let tasks = {};  
let idCounter = 1;  

function themCongViec(tenCongViec, moTa, thoiGianBatDau, trangThai) {  
    let congViec = {  
        id: idCounter++,  
        name: tenCongViec,  
        description: moTa,  
        startTime: thoiGianBatDau,  
        status: trangThai  
    };  
    tasks[congViec.id] = congViec;  
    console.log("Thêm công việc thành công:", congViec);  
}  

function hienThiTatCaCongViec() {  
    console.log("Tất cả công việc:");  
    for (let id in tasks) {  
        console.log(`- ID: ${tasks[id].id}, Tên: ${tasks[id].name}, Mô tả: ${tasks[id].description}, Thời gian bắt đầu: ${tasks[id].startTime}, Trạng thái: ${tasks[id].status}`);  
    }  
}  

function capNhatTrangThai(id, trangThaiMoi) {  
    if (tasks[id]) {  
        tasks[id].status = trangThaiMoi;  
        console.log("Cập nhật trạng thái công việc thành công.");  
    } else {  
        console.log("Không tìm thấy công việc để cập nhật.");  
    }  
}  

function locCongViec(theoTrangThai) {  
    console.log(`Công việc theo trạng thái "${theoTrangThai}":`);  
    for (let id in tasks) {  
        if (tasks[id].status === theoTrangThai) {  
            console.log(`- ID: ${tasks[id].id}, Tên: ${tasks[id].name}, Mô tả: ${tasks[id].description}, Thời gian bắt đầu: ${tasks[id].startTime}`);  
        }  
    }  
}  

function sapXepCongViec() {  
    console.log("Công việc đã sắp xếp theo trạng thái:");  
    let sortedTasks = Object.values(tasks).sort((a, b) => a.status.localeCompare(b.status));  
    sortedTasks.forEach(task => {  
        console.log(`- ID: ${task.id}, Tên: ${task.name}, Trạng thái: ${task.status}`);  
    });  
}  

let choice;  
do {  
    console.log("1. Thêm công việc mới");  
    console.log("2. Hiển thị tất cả công việc");  
    console.log("3. Cập nhật trạng thái công việc theo ID");  
    console.log("4. Lọc công việc theo trạng thái");  
    console.log("5. Sắp xếp công việc theo trạng thái");  
    console.log("6. Thoát");  

    choice = +prompt("Mời bạn nhập lựa chọn:");  

    switch (choice) {  
        case 1:  
            let tenCongViec = prompt("Nhập tên công việc:");  
            let moTa = prompt("Nhập mô tả công việc:");  
            let thoiGianBatDau = prompt("Nhập thời gian bắt đầu:");  
            let trangThai = prompt("Nhập trạng thái (hoàn thành/chưa hoàn thành):");  
            themCongViec(tenCongViec, moTa, thoiGianBatDau, trangThai);  
            break;  
        case 2:  
            hienThiTatCaCongViec();  
            break;  
        case 3:  
            let id = prompt("Nhập ID công việc cần cập nhật:");  
            let trangThaiMoi = prompt("Nhập trạng thái mới:");  
            capNhatTrangThai(id, trangThaiMoi);  
            break;  
        case 4:  
            let trangThaiLoc = prompt("Nhập trạng thái cần lọc:");  
            locCongViec(trangThaiLoc);  
            break;  
        case 5:  
            sapXepCongViec();  
            break;  
        case 6:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 6);  