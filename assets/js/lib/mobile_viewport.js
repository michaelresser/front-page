/* adjust mobile vh to account for addressbar */
export default  MobileViewport () => {
        window.addEventListener('resize', () => {
            // get the value of the device window, in vh units
            const vh = window.innerheight * .01;
            // create and set the --vh var in :root to be used by CSS
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }


