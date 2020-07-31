const mobileMenuController = () => {
    /* query all elemnts for reference */
    const elements = {
        navToggle: document.querySelector('.nav-toggle'),
        navItems: document.querySelector('.nav-items'),
        splashTitle: document.querySelector('.splash__title')
    }
    const animSettings = {
        duration: 700,
        easing: 'ease-out',
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'forwards'
    }
    const fadeTitleOut = () => {
        elements.splashTitle.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], animSettings);
        elements.navItems.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 }
        ], animSettings);
    }
    const fadeTitleIn = () => {
        elements.splashTitle.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 },
        ], animSettings);
        elements.navItems.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], animSettings);
    }

    /* Logic */
    if (elements.navItems.style.display === "") {         
        fadeTitleOut();
        elements.navItems.style.display = 'flex';
        elements.navToggle.innerHTML = '<span class="iconify nav-icon" data-icon="fa-solid:times" data-inline="false"></span>';   
    } else {
         
        elements.navItems.style.display = "";
        fadeTitleIn()
        elements.navToggle.innerHTML = '<span class="iconify nav-icon" data-icon="fa-solid:bars" data-inline="false"></span>';  
    };

}


export default mobileMenuController;  