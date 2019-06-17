function kiem_tra() {
    var ho_ten = document.getElementById('ho_ten').value;
    var regex_ho_ten = /^[a-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+{5,32}$/i;
    var result_ho_ten = regex_ho_ten.test(ho_ten);
    if (result_ho_ten == false) {
        document.getElementById('ho_ten').style.outline = 'none';
        document.getElementById('ho_ten').style.border = 'red 1px solid';
        document.getElementById('ho_ten').focus();
        document.getElementById('loi_ho_ten').style.display = 'block';
        return false;
    } else {
        document.getElementById('ho_ten').style.outline = 'none';
        document.getElementById('ho_ten').style.border = 'green 1px solid';
        document.getElementById('loi_ho_ten').style.display = 'none';
    }
}