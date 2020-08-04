export default class SplashController {
    constructor(animSettings) {
        // set the refs for the page elements
        this.elements = {
            splash: {
                silhouette: document.querySelector('.splash__sillhouette'),
                title: document.querySelector('.splash__title'),
                bg: document.querySelector('.splash__bg'),
                arrow: document.querySelector('.splash__arrow').parentNode
            },
            work: {
                container: document.querySelector('.work'),
                title: document.querySelector('.work__intro'),
                list: document.querySelector('.projects'),
                social: document.querySelector('.social')
            },
            navbar: {
                navToggle: document.querySelector('.nav-toggle'),
                navItems: document.querySelector('.nav-items'),
            }
        },
            this.animSettings = animSettings ? animSettings : {
                duration: 750,
                easing: 'ease-out',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards'
            }

        // Set Initial State of Projects section
        this.elements.work.title.style.opacity = 0;
        this.elements.work.list.style.opacity = 0;

        let waypoint = new Waypoint({
            element: this.elements.work.title,
            handler: (direction) => {
                if (direction === 'down') {                    
                    this.hideNavbarContent()
                    this.hideSplashContent()
                    this.showProjectsContent()
                } else {
                    this.showSplashContent()
                    this.hideProjectsContent()
                }
            },
            offset: '90%'
        })
    }

    // Show Hide Methods written using WebAnimationsAPI syntax
    hideNavbarContent(){
        if(this.elements.navbar.navItems.style.display === 'flex'){
            this.elements.navbar.navItems.style.display = 'none';
            elements.navToggle.innerHTML = '<span class="iconify nav-icon" data-icon="fa-solid:bars" data-inline="false"></span>';   
        }
    }
    hideSplashContent() {
        this.animSettings.delay = 0
        this.elements.splash.silhouette.animate([
            { transform: 'scale(1)', opacity: 1, offset: 0 },
            { transform: 'scale(.95)', opacity: 0, offset: 1 }
        ], this.animSettings)
        this.elements.splash.title.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], this.animSettings)
        this.elements.splash.bg.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], this.animSettings)
        this.elements.splash.arrow.animate([
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ], this.animSettings)
        this.elements.splash.arrow.style.pointerEvents = 'none'
    }
    scrollToWork(){

    }
    showSplashContent() {
        this.animSettings.delay = 0
        this.elements.splash.silhouette.animate([
            { transform: 'scale(.9) ', opacity: 0, offset: 0 },
            { transform: 'scale(1) ', opacity: 1, offset: 1 }
        ], this.animSettings)
        this.elements.splash.title.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 },
        ], this.animSettings)
        this.elements.splash.bg.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 }
        ], this.animSettings)
        this.elements.splash.arrow.animate([
            { opacity: 0, offset: 0 },
            { opacity: 1, offset: 1 }
        ], this.animSettings)
        this.elements.splash.arrow.style.pointerEvents = 'initial'
    }
    showProjectsContent() {
        this.animSettings.delay = 300
        this.elements.work.title.animate([
            { transform: 'translateY(0px)', opacity: .5, offset: 0 },
            { transform: 'translateY(0px)', opacity: 1, offset: 1 }
        ], this.animSettings)
        this.animSettings.delay = 300
        this.elements.work.list.animate([
            { transform: 'translateY(0px)', opacity: 0, offset: 0 },
            { transform: 'translateY(0px)', opacity: 1, offset: 1 }
        ], this.animSettings)
    }
    hideProjectsContent() {
        this.animSettings.delay = 0
        this.elements.work.title.animate([
            { transform: 'translateY(0px)', opacity: 1, offset: 0 },
            { transform: 'translateY(40px)', opacity: 0, offset: 1 }
        ], this.animSettings)
        this.elements.work.list.animate([
            { transform: 'translateY(40px)', opacity: 1, offset: 0 },
            { transform: 'translateY(0px)', opacity: 0, offset: 1 }
        ], this.animSettings)
    }
}
