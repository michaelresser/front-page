const mobileMenuController = () => {
    /* query all elemnts for reference */
    const elements = {
        nav: {
            main: document.querySelector('.main-nav'),
            toggle: document.querySelector('.nav-toggle'),
            items: document.querySelector('.nav-items')
        },
        splash: {
            title: document.querySelector('.splash__title')
        },
        
    }

    const menuDown = () => {
        elements.splash.title.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], {
            duration: 100,
            easing: 'ease-out',
            delay: 0,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards'
        }).onfinish = () => {
            elements.splash.title.style.display = 'none';
            elements.nav.main.style.height = '100vh';
            elements.nav.items.style.display = 'flex';
            elements.nav.toggle.innerHTML = '<span class="iconify nav-icon" data-icon="fa-solid:times" data-inline="false"></span>';
        }
        elements.nav.items.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 }
        ], {
            duration: 700,
            easing: 'ease-out',
            delay: 0,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards'
        });
    }
    const menuUp = () => {
        elements.splash.title.style.display = "flex";
        elements.nav.items.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], {
            duration: 100,
            easing: 'ease-out',
            delay: 0,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards'
        }).onfinish = () => {
            elements.nav.toggle.innerHTML = '<span class="iconify nav-icon" data-icon="fa-solid:bars" data-inline="false"></span>'
            elements.nav.main.style.height = 'auto';
            elements.nav.items.style.display = "";
        };
        elements.splash.title.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 },
        ], {
            duration: 700,
            easing: 'ease-out',
            delay: 0,
            iterations: 1,
            direction: 'normal',
            fill: 'forwards'
        });
    }

    /* Logic */
    if (elements.nav.items.style.display === "") {
        menuDown();
    } else {
        menuUp();
    };

}

export default mobileMenuController;  