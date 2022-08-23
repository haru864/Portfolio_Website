const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.controll');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        // console.log(sectBtn[i]);
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            for (let j = 0; j < currentBtn.length; j++) {
                currentBtn[0].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }

    // Sections Active
    allSections.forEach((section) => {
        // console.log(section);
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                // remove selected from the other btns
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                // hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    });

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();
