let items = [];

//Gọi lên ajax lấy giữ liệu 
$.ajax({
    url: 'https://raw.githubusercontent.com/vananh997/vananh997.github.io/master/BT17_Table/items.json',
    type: 'get',
    dataType: 'json',
}).done(function(data) {
    // Sau khi có dữ liệu thì gán vào biến global products để dùng khi sort
    items = data;

    // Đổ dữ liệu ra bảng
    renderContent();
});



function renderContent() {
    let content = '';

    for (let i = 0; i < items.length; i++) {
        content += `<tr>
        <td><img src="img/${items[i].img}" alt="${items[i].name}"></td>
        <td class="itemColor">${items[i].name}</td>
        <td class="itemBackground">${items[i].id}</td>
        <td class="itemColor">${items[i].price}</td>
        <td class="itemBackground">${items[i].quantity}</td>
    </tr>`;
    }

    document.getElementById('items').innerHTML = content;
}

function sortColumn(thElement) {
    thElement = $(thElement);
    const column = thElement.attr('data-column');

    if (thElement.attr('data-order') === 'asc') {
        thElement.attr('data-order', 'desc');
        thElement.children().removeClass('fas fa-sort-up').addClass('fas fa-sort-down');
        sortAz(column);
    } else {
        thElement.attr('data-order', 'asc');
        thElement.children().removeClass('fas fa-sort-down').addClass('fas fa-sort-up');
        sortZa(column);
    }

    renderContent();
}

function sortAz(column) {
    items.sort(function(a, b) {
        let x = a[column];
        let y = b[column];

        if (typeof x == 'string') x = x.toLocaleLowerCase()
        if (typeof y == 'string') y = y.toLocaleLowerCase()

        if (x < y) return -1;
        if (x > y) return 1;

        return 0;
    })
}

function sortZa(column) {
    items.sort(function(a, b) {
        let x = a[column];
        let y = b[column];

        if (typeof x == 'string') x = x.toLocaleLowerCase()
        if (typeof y == 'string') y = y.toLocaleLowerCase()

        if (x < y) return 1;
        if (x > y) return -1;

        return 0;
    })
}

renderContent();