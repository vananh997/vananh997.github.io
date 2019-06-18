function profile() {
    var ho_ten = document.getElementById('ho_ten').value;
    var email = document.getElementById('email').value;
    var mat_khau = document.getElementById('mat_khau').value;
    var ngay_sinh = document.getElementById('ngay_sinh').value;
    var sdt = document.getElementById('sdt').value;
    var dia_chi = document.getElementById('dia_chi').value;

    document.getElementById('hoTen').innerText = ho_ten;
    document.getElementById('email').innerText = email;
    document.getElementById('matKhau').innerText = mat_khau;
    document.getElementById('ngaySinh').innerText = ngay_sinh;
    document.getElementById('sdt').innerText = sdt;
}