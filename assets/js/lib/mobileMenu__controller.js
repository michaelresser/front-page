const mobileMenuController = () => {
    /* query all elemnts for reference */
    const elements = {
        navToggle: document.querySelector('.nav-toggle').children[0],
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
        elements.navToggle.setAttribute("data-icon", "fa-solid:times");    
        fadeTitleOut();
        elements.navItems.style.display = 'flex';
        console.log(elements.navToggle.getAttribute('data-icon'));
    } else {
        elements.navToggle.setAttribute('data-icon', 'fa-solid:bars');
        elements.navItems.style.display = "";
        fadeTitleIn()
        console.log(elements.navToggle.getAttribute('data-icon'));
    };

}


export default mobileMenuController;  