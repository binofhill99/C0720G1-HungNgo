


function Nhap() {
    let name = document.getElementById("name").value;
    let idCard = document.getElementById("card").value;
    let birthday = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let customerType = document.getElementById("customerType").value;
    let discount = document.getElementById("discount").value;
    let customerNumber = document.getElementById("customerNumber").value;
    let rentDays = document.getElementById("rentDays").value;

    let roomType = document.getElementById("roomType").value;
    let serviceType = document.getElementById("serviceType").value;


    document.write("Họ Tên: " + name);
    document.write("<br/>")
    document.write("Số CMND: " + idCard);
    document.write("<br/>")
    document.write("Ngày sinh: " + birthday);
    document.write("<br/>")
    document.write("Email: " + email);
    document.write("<br/>")
    document.write("Địa chỉ: " + address);
    document.write("<br/>")
    document.write("Loại KH: " + customerType);
    document.write("<br/>")
    document.write("Giảm giá: " + discount);
    document.write("<br/>")
    document.write("Số lượng KH: " + customerNumber);
    document.write("<br/>")
    document.write("Số ngày thuê: " + rentDays);
    document.write("<br/>")
    document.write("Loại phòng thuê: " + roomType);
    document.write("<br/>")
    document.write("Loại dịch vụ: " + serviceType);
    document.write("<br/>")

    let total = 0;
    if (roomType = "Villa") {
        total = 500 * rentDays * ((100 - discount) / 100);
    } else if (roomType = "House") {
        total = 300 * rentDays * ((100 - discount) / 100);
    } else if (roomType = "Room") {
        total = 100 * rentDays * ((100 - discount) / 100);
    }

    document.write("Tổng tiền phải trả sau khi đã được giảm giá: " +total);
}