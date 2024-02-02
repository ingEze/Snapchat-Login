let checkbox = document.querySelector('#theme-button');
let slider = document.querySelector('.slider');

let backgroundColorMode = document.querySelector('.container');
let centerColorMode = document.querySelector('.center');

let iconHeader = document.querySelector('.i-header');
let titleHeader = document.querySelector('.title-header');
let controlLabel = document.querySelector('.control-label');

let iconApple = document.querySelector('.bi-apple');


// LocalStorage


document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('darkMode') === 'true'){
        checkbox.checked = true;
    }
})



checkbox.addEventListener('change', function() {

    if(this.checked){
        slider.classList.remove('sun');
        slider.classList.add('moon');

        backgroundColorMode.classList.remove('white-mode');
        backgroundColorMode.classList.add('dark-mode');

        centerColorMode.classList.remove('center-white-mode');
        centerColorMode.classList.add('center-dark-mode');

        iconHeader.classList.add('text-dark-mode');
        titleHeader.classList.add('text-dark-mode');
        controlLabel.classList.add('text-dark-mode');

        iconApple.classList.remove('white-theme');
        iconApple.classList.add('icon-dark-mode');

        localStorage.setItem('darkMode', 'true');

    }else{
        slider.classList.remove('moon');
        slider.classList.add('sun');

        backgroundColorMode.classList.add('white-mode');
        backgroundColorMode.classList.remove('dark-mode');

        centerColorMode.classList.add('center-white-mode');
        centerColorMode.classList.remove('center-dark-mode');

        iconHeader.classList.remove('text-dark-mode');
        titleHeader.classList.remove('text-dark-mode');
        controlLabel.classList.remove('text-dark-mode');

        iconApple.classList.remove('icon-dark-mode');
        iconApple.classList.add('white-theme');

        localStorage.setItem('darkMode', 'false');

    }



})