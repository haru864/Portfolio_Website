const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.controll');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            // console.log(currentBtn);
            // console.log(this.classList);
            for (let j = 0; j < currentBtn.length; j++) {
                currentBtn[0].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        })
    }
}

PageTransitions();
