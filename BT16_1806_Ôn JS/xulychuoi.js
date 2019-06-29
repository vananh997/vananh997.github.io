//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.

function vietHoa(str) {
    catChuoi = str.split(" ");
    arr = [];
    for (i = 0; i < str.length; i++) {
        arr.push(arr.charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());

    }
    return arr.join(' ');

}

//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

function vietThuong(str) {
    rep = str.replace(" ", "-");
    return rep.toLowerCase();
}

//Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường).
// Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey''.

function

//Bài 4: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.