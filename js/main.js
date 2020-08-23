(function () {
    const field = document.querySelector('.text__input');
    const btn = document.querySelector('.text__btn');
    const ul_add = document.querySelector('ul');

    let data;
    field.addEventListener('change', (event) => {
        data = event.target.value;
    })

    btn.onclick = () => {
        let liLast = document.createElement('li');
        liLast.innerHTML = `${data}`;
        liLast.setAttribute('id', `${data}`);

        let inpt = document.createElement('input');
        inpt.setAttribute('type', 'checkbox');
        inpt.setAttribute('name', `${data}`);
        ul_add.append(liLast, inpt);
    }
})();

// One simple text field, where you type the name of an item you want
// One button to add this item into your wish list
// List of your desired items
// Every item in your wish list should have a checkbox, by checking it, it should visually change