const btnBuy = document.getElementById('btn_buy_now');
const dropdown = document.getElementById('dropdown');
const menu = document.getElementById('header_menu');
const header = document.getElementById('header');

const posicaoMenu = menu.getBoundingClientRect();
const xMenu = posicaoMenu.left + window.scrollX;

btnBuy.addEventListener('mouseover', function(e) {
    dropdown.style.setProperty('left', xMenu+'px');
    dropdown.classList.add('dropdown--is-active');
});

header.addEventListener('mouseout', function () {
    dropdown.classList.remove('dropdown--is-active');
})

dropdown.addEventListener('mouseover', function() {
    dropdown.classList.add('dropdown--is-active');
})

dropdown.addEventListener('mouseout', function() {
    dropdown.classList.remove('dropdown--is-active');
})


