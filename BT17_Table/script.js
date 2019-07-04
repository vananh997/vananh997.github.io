let items = [{
        id: '001',
        name: 'Mochi the Cat',
        price: 420000,
        quantity: 1,
        img: 'img1.jpg'
    },
    {
        id: '002',
        name: 'The Nana',
        price: 400000,
        quantity: 3,
        img: 'img2.jpg'
    },
    {
        id: '003',
        name: 'Oreo the Cat',
        price: 450000,
        quantity: 2,
        img: 'img3.jpg'
    },
    {
        id: '004',
        name: 'Sliver Cat',
        price: 230000,
        quantity: 4,
        img: 'img4.jpg'
    },
    {
        id: '005',
        name: 'Piggy ',
        price: 220000,
        quantity: 5,
        img: 'img5.jpg'
    }
];

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