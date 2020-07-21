const handleProjectModal = (e) => {
    const project = e.target;
    const elements = {
        body: document.body,
        modal: document.querySelector('.modal'),
        modal__close: document.querySelector('.modal__close'),
        title: document.querySelector('.showcase__title'),
        showcase__img: document.querySelector('.showcase__img'),
        description: document.querySelector('.showcase__description'),
        view__site: document.querySelector('.view__site')
    }
    const data = JSON.parse(project.getAttribute('data-content'));
    console.log(elements);
    console.log(data);

    // open modal
    elements.modal.style.top = 0;
    // remember scroll position
    let scrollPos = window.pageYOffset;
    console.log(scrollPos);

    // prevent body scroll when modal is opened
    elements.body.style.position = 'fixed';
    elements.body.style.top = 0;

    // set modal element data
    elements.title.innerHTML = data.title;
    elements.description.innerHTML = data.description;
    elements.showcase__img.setAttribute('src', `${data.images[0].src}`);
    elements.view__site.setAttribute('href', data.site_url)

    // modal close function
    elements.modal.addEventListener('click', () => {
        // close the modal
        elements.modal.style.top = "100%";

        // resume scroll position
        elements.body.style.position = '';
        elements.body.style.top = scrollPos;
        
      
    });



}


export default handleProjectModal;