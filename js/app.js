function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented') && button.classList.contains('dashboard__item__button--return')) {
        imagem.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerHTML = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    }
}

alterarStatus(id)