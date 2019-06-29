//Bài 1: Viết hàm tính thể tích hình cầu biết tham số truyền vào là bán kính

function theTichHinhCau(banKinh) {
    var theTich = 4 / 3 * Math.PI * Math.pow(banKinh, 3);
    return theTich;
}

//Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function tongSoNguyen(x, y) {
    var tong = 0;
    for (i = x + 1; i < y; i++) {
        tong += i;
    }
    return tong;
}

//Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function kiemTraSoNguyenTo(so) {
    if (!Number.isInteger(so) || so < 2) {
        return false;
    }
    for (let i = 2; i < so / 2; i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}

//Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tongSoNguyenTo(x) {

}


//Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function tongUocSo(x) {

}

///Bài 6:Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci (0, 1, 1, 2, 3, 5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.
function tongSoChan() {

}