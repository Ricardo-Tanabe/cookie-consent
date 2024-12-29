const allScreen = document.getElementById('container-master');
const popupCookie = document.getElementsByClassName('popup-cookie');
const xCookie = document.querySelector('.cookie-flex-config > p');
const buttonCookie = document.querySelector('.cookie-advise > button');
const clearCookie = document.getElementsByClassName('smooth-square');
const cookieList = [xCookie, buttonCookie]

function genericAction() {
    allScreen.classList.remove('overlay');
    popupCookie[0].style.display = 'none';
}

document.addEventListener('click', (e) => {
    if(cookieList.includes(e.target)) {
        if(e.target === buttonCookie) {
            localStorage.setItem('cookieAccepted', 'true')
        }
        if(allScreen.classList.contains('overlay')) {
            genericAction();
            console.log(e.target);
        }
    }

    if(e.target === clearCookie[0]) {
        // Pode ser um ou outro
        localStorage.removeItem('cookieAccepted');
        // localStorage.clear();
        location.reload()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if(cookieAccepted === 'true') {
        genericAction();
        console.log('Usuário com o cookie aceito');
    }
})

