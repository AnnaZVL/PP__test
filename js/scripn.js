const $btnEnter = document.querySelector('.enter'),
$modal = document.querySelector('.modal');

$btnEnter.addEventListener('click', () => {
    $modal.classList.add('open')
})