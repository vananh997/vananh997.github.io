$('#register-form').on('submit', function() {
    var isValid = true;
    //Kiểm tra họ tên
    if ($('#ho_ten').val().trim() == '') {
        $('#ho_ten').next('span').text('Không để trống!');
        isValid = false;
    } else if ($('#ho_ten').val().match(/^[a-z\ ]+$/i) == null) {
        $('#ho_ten').next('span').text('Tên sai cú pháp!');
        isValid = false;
    } else {
        $('#ho_ten').next('span').text('');
    }

    //Kiểm tra email
    if ($('#email').val().trim() == '') {
        $('#email').next('span').text('Không để trống!');
        isValid = false;
    } else if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
        $('#email').next('span').text('Email sai cú pháp!');
        isValid = false;
    } else {
        $('#email').next('span').text('');
    }

    //Kiểm tra Link FB
    if ($('#fb').val() == '') {
        $('#fb').next('span').text('Không để trống!');
        isValid = false;
    } else if ($('#fb').val().match(/(?<http>(http:[/][/]|www.facebook)([a-z]|[A-Z]|[0-9]|[/.]|[~])*)/) == null) {
        $('#fb').next('span').text('Link sai cú pháp');
        isValid = false;
    } else {
        $('#fb').next('span').text('');
    }

    //Kiểm tra mật khẩu
    if ($('#mat_khau').val() == '') {
        $('#mat_khau').next('span').text('Không để trống!');
        isValid = false;
    } else if ($('#mat_khau').val().match(/^([a-zA-Z0-9]){6,8}$/i) == null) {
        $('#mat_khau').next('span').text('Mật khẩu sai cú pháp!');
        isValid = false;
    } else {
        $('#mat_khau').next('span').text('');
    }

    //Kiểm tra ngày sinh
    if ($('#ngay_sinh').val() == '') {
        $('#ngay_sinh').next('span').text('Không để trống!');
        isValid = false;
    } else {
        $('#ngay_sinh').next('span').text('');
    }

    //Kiểm tra số điện thoại
    if ($('#sdt').val() == '') {
        $('#sdt').next('span').text('Không để trống!');
        isValid = false;
    } else if ($('#sdt').val().match(/^\(?[\d]{4}\)?[\s-]?[\d]{3}[\s-]?[\d]{3}$/) == null) {
        $('#sdt').next('span').text('Số điện thoại sai cú pháp!');
        isValid = false;
    } else {
        $('#sdt').next('span').text('');
    }

    //Kiểm tra giới tính
    if ($('.gioi_tinh').val() == '') {
        $('.gioi_tinh').next('span').text('Không để trống!');
        isValid = false;
    } else {
        $('.gioi_tinh').next('span').text('');
    }

    //Kiểm tra địa chỉ
    if ($('#dia_chi').val() == '') {
        $('#dia_chi').next('span').text('Không để trống!');
        isValid = false;
    } else {
        $('#dia_chi').next('span').text('');
    }

    return isValid;
});